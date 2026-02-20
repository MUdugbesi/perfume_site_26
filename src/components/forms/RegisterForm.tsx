import { RegisterFormSchema } from '@/schema';
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
import authServices from '@/actions/services/auth/auth-services';

const RegisterForm = () => {
	const form = useForm<z.infer<typeof RegisterFormSchema>>({
		resolver: zodResolver(RegisterFormSchema),
		defaultValues: {
			fName: '',
			lName: '',
			email: '',
			password: '',
			confirmPassword: '',
			tel: '',
			role: '',
		},
	});
	const onSubmit = async (values: z.infer<typeof RegisterFormSchema>) => {
		const { fName, lName, email, password, role, tel } = values;
		const payload = { fName, lName, email, password, role, tel };
		const result = await authServices.register(payload);

		console.log(result);
		return result;
	};

	const { isDirty } = form.formState;

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='w-[80%] mx-auto flex flex-col items-center justify-center overflow-hidden z-10'
			>
				<div className='mb-4'>
					<h3 className='text-center mt-10 text-3xl uppercase font-bold font-robotoCondensed'>
						Create an account
					</h3>
					<p className='font-robotoCondensed mt-1 text-center italic text-sm'>
						Engage and navigate through our perfume collections, own an account
						to navigate this.
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<div className='grid grid-cols-2 gap-2 w-full justify-between'>
						<FormField
							control={form.control}
							name='fName'
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input
											placeholder='First Name'
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
							name='lName'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input
											placeholder='Last Name'
											{...field}
											className='font-poppins'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email Address</FormLabel>
								<FormControl>
									<Input
										placeholder='Email Address'
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
						name='tel'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Tel</FormLabel>
								<FormControl>
									<Input
										placeholder='080XXXXXXX'
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
									<Input placeholder='Password' type='password' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='confirmPassword'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<Input
										placeholder='Confirm password'
										type='password'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='role'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-xs leading-relaxed'>Role</FormLabel>
								<div className='flex gap-2'>
									<FormControl className='rounded-[2px]'>
										<Input
											placeholder='Role'
											{...field}
											className='font-poppins'
										/>
									</FormControl>
								</div>
							</FormItem>
						)}
					/>

					<Button variant={'default'} size={'lg'} disabled={!isDirty}>
						Register
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default RegisterForm;
