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
import { Link, useNavigate } from 'react-router';
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
			return customErrorMessage(e as Error);
		}
	};

	const { isDirty } = form.formState;

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='mx-auto flex items-center justify-center overflow-hidden z-10 w-[60%]'
			>
				{/* <section className='w-full z-40'> */}
				<div className='w-full flex flex-col gap-4'>
					<h3 className='text-4xl font-bold uppercase text-center mb-8 font-robotoCondensed'>Login</h3>
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

					<Link
						to='/forgot-password'
						className='text-sm text-primary font-robotoCondensed w-full justify-end flex hover:underline hover:text-red-500 transition duration-200'
					>
						Forgot Password?
					</Link>

					<Button
						size={'lg'}
						className='bg-orange-400 hover:bg-orange-500/60 active:bg-orange-500'
						disabled={!isDirty}
					>
						Login
					</Button>
				</div>
				{/* </section> */}
			</form>
		</Form>
	);
};

export default LoginForm;
