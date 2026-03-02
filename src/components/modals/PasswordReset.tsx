import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import type z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordResetSchema } from '@/schema';
import { Input } from '../ui/input';
import passwordReset from '@/assets/auth/reset-password2.png';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';
import { useState } from 'react';
import OtpModal from '@/shared/Modals/OtpModal';

const PasswordReset = () => {
	const [otpSent, setOtpSent] = useState<boolean>(false);
	const form = useForm<z.infer<typeof PasswordResetSchema>>({
		resolver: zodResolver(PasswordResetSchema),
		defaultValues: { email: '' },
	});

	const onSubmit = (values: z.infer<typeof PasswordResetSchema>) => {
		setOtpSent(true);
		console.log(values);
	};
	const navigate = useNavigate();

	return (
		<section className='w-[30%] mx-auto flex items-center justify-center flex-col px-16 py-10 z-10 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl shadow-black/30'>
			{!otpSent && (
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className='mb-4 flex w-full'>
							<ArrowLeftIcon
								onClick={() => navigate(-1)}
								className='hover:cursor-pointer'
							/>
						</div>
						<img
							src={passwordReset}
							alt='password-reset-image'
							className='w-100 h-60 object-cover'
						/>
						<h2 className='font-poppins text-xl font-semibold mb-4'>
							Forgot Password?
						</h2>
						<p className='font-poppins text-sm mb-4 text-center'>
							Please enter your email address and we'll send you an OTP to reset
							your password.
						</p>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem className='w-full'>
									<FormLabel className='font-poppins text-sm mb-1'>
										Email Address
										<span className='text-red-500 text-sm'>*</span>
									</FormLabel>
									<FormControl>
										<Input
											placeholder='Email Address'
											type='email'
											{...field}
											className='font-poppins h-11'
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
			)}

			{otpSent && (
				<>
					<OtpModal />
				</>
			)}
		</section>
	);
};

export default PasswordReset;
