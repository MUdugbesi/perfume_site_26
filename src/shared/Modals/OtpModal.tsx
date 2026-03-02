import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { OtpSchema } from '@/schema';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import type z from 'zod';

const OtpModal = () => {
	const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof OtpSchema>>({
		defaultValues: {
			otp: ['', '', '', '', '', ''],
		},
	});
	const otpValues = form.watch('otp');

	const handleChange = (value: string, index: number) => {
		if (!/^[0-9]?$/.test(value)) return;

		const newOtp = [...otpValues];
		newOtp[index] = value;
		form.setValue('otp', newOtp, { shouldDirty: true });

		if (value && index < 5) {
			inputsRef.current[index + 1]?.focus();
		}
	};

	const handleBackspace = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number,
	) => {
		if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
			inputsRef.current[index - 1]?.focus();
		}
	};

	const onSubmit = (data: z.infer<typeof OtpSchema>) => {
		const finalOtp = data.otp.join('');
		if (finalOtp.length === 6) {
			console.log('Final OTP:', finalOtp);
			// Proceed with OTP verification logic here
		} else {
			console.error('OTP must be 6 digits');
		}
		navigate('/reset-password');
	};

	return (
		<>
			<form className='w-full' onSubmit={form.handleSubmit(onSubmit)}>
				<h2 className='font-poppins text-lg font-bold text-center mb-4'>
					Enter OTP
				</h2>
				<p className='font-poppins text-sm mb-2 text-black/80'>
					Kindly check your email for the OTP.
					<span className='text-red-500 text-sm'>*</span>
				</p>
				<div className='flex w-full justify-evenly mt-5 mb-2'>
					{otpValues.map((value, index) => (
						<Input
							key={index}
							ref={(el) => {
								inputsRef.current[index] = el;
							}}
							value={inputsRef.current[index]?.value || value}
							onChange={(e) => handleChange(e.target.value, index)}
							onKeyDown={(e) => handleBackspace(e, index)}
							maxLength={1}
							className='font-poppins h-11 w-10 text-center mx-1'
						/>
					))}
				</div>
				<Button
					type='submit'
					className='w-full mt-4 bg-orange-400 hover:bg-orange-500/60 active:bg-orange-500 h-10'
					disabled={
						!form.formState.isDirty || otpValues.some((val) => val === '')
					}
				>
					Verify OTP
					<ArrowRight className='ml-2' />
				</Button>
			</form>
		</>
	);
};

export default OtpModal;
