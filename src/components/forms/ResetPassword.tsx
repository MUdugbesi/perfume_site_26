import { NewPasswordSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type z from 'zod';
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
import { useNavigate } from 'react-router';

const ResetPassword = () => {
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof NewPasswordSchema>>({
		resolver: zodResolver(NewPasswordSchema),
		defaultValues: { password: '', confirmPassword: '' },
	});

	const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
		console.log(values);
		navigate('/auth');
	};

	return (
		<section className='w-[35%] mx-auto flex items-center justify-center flex-col px-16 py-14 z-10 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl shadow-black/30'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='w-[80%]'>
					<h2 className='font-poppins text-xl font-semibold mb-4 text-center'>
						Enter new Password?
					</h2>
					<p className='font-poppins text-sm mb-4 text-center'>
						Please enter and confirm your new password.
					</p>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel className='font-poppins text-sm mb-1'>
									Password
									<span className='text-red-500 text-sm'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										placeholder='Password'
										type='password'
										{...field}
										className='font-poppins h-11 mb-3'
									/>
								</FormControl>
								<FormMessage className='font-poppins text-sm' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='confirmPassword'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel className='font-poppins text-sm mb-1'>
									Confirm Password
									<span className='text-red-500 text-sm'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										placeholder='Confirm Password'
										type='password'
										{...field}
										className='font-poppins h-11'
										disabled={form.getValues('password') === ''}
									/>
								</FormControl>
								<FormMessage className='font-poppins text-sm' />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						className='w-full mt-4 bg-orange-400 hover:bg-orange-500/60 active:bg-orange-500 h-10'
						disabled={!form.formState.isDirty}
					>
						Send
					</Button>
				</form>
			</Form>
		</section>
	);
};

export default ResetPassword;
