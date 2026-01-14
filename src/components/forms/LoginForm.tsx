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

const LoginForm = () => {
	const form = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			usernameOrEmail: '',
			password: '',
		},
	});
	const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {
		console.log(values);
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
							name='usernameOrEmail'
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
