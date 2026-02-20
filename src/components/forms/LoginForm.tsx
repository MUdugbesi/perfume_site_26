import { LoginFormSchema } from '@/schema';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import credentialAuth from '@/lib/user-auth';
import type { UserLoginAuthResponse } from '@/types';
import { useNavigate } from 'react-router';
import { customErrorMessage } from '@/lib/utils';

const LoginForm = () => {
	const form = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			emailOrUsername: '',
			password: '',
			rememberMe: false,
		},
	});
	const navigate = useNavigate();

	const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
		const { password, emailOrUsername } = values;
		const payload = { emailOrUsername, password };
		try {
			const { statusCode, data } = (await credentialAuth(
				payload,
			)) as UserLoginAuthResponse;

			if (statusCode === 200 && data !== null) {
				toast.success('Login successful! Redirecting to home page...');
				// navigate(getDashboardRoute(data.role));
				navigate('/home');
				return;
			}
		} catch (e) {
			customErrorMessage(e as Error);
		}
	};

	const { isDirty } = form.formState;

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='mx-auto flex items-center justify-center overflow-hidden z-10 w-[80%]'
			>
				<section className='w-full z-40'>
					<div className='mb-4'>
						<h3 className='text-center mt-10 text-3xl uppercase font-bold font-robotoCondensed'>
							Welcome
						</h3>
						<p className='font-robotoCondensed mt-1 text-center'>
							Please enter your login details
						</p>
					</div>
					<div className='flex flex-col gap-4'>
						<FormField
							control={form.control}
							name='emailOrUsername'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email Address or Username</FormLabel>
									<FormControl>
										<Input
											placeholder='Email or Username'
											{...field}
											className='font-poppins'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											placeholder='Password'
											type='password'
											{...field}
											className='font-poppins'
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<Button size={'lg'} className='bg-primary ' disabled={!isDirty}>
							Login
						</Button>
					</div>
				</section>
			</form>
		</Form>
	);
};

export default LoginForm;
