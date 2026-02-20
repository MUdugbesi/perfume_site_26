import * as z from 'zod';

export const LoginFormSchema = z.object({
	emailOrUsername: z.string().min(1, { message: 'Email or username required' }),
	password: z
		.string()
		.min(1, { message: 'Password is required' })
		.min(8, { message: 'Invalid password' }),
	rememberMe: z.boolean().optional(),
});

export const RegisterFormSchema = z.object({
	fName: z
		.string()
		.min(1, { message: 'First name required' })
		.min(3, { message: 'First name should be at least three characters' }),
	lName: z
		.string()
		.min(1, { message: 'Last name required' })
		.min(3, { message: 'Last name should be at least three characters' }),
	tel: z.string(),
	email: z.email().min(1, { message: 'Email address is required' }),
	password: z
		.string()
		.min(1, { message: 'Password is required' })
		.min(8, { message: 'Invalid password' })
		.regex(
			new RegExp(
				'^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#@$!%*?&])[A-Za-z\\d#$%@!%*?&]{8,}$',
			),
			{
				message:
					'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character[@$#!%*?&].',
			},
		),
	confirmPassword: z.string().min(1, { message: 'Please confirm password' }),
	role: z.string(),
});
