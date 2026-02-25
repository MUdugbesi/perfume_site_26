import { LoginFormSchema } from '@/schema';
import type { ErrorResponse, UserLoginAuthResponse } from '@/types';
import Cookies from 'universal-cookie';
import authServices from '@/actions/services/auth/auth-services';
import { jwtDecode } from 'jwt-decode';
import type z from 'zod';
import { customErrorMessage } from './utils';

export const cookies = new Cookies();

export const getToken = () => cookies.get('auth_token');
export const removeToken = () => {
	cookies.remove('auth_token', { path: '/' });
};

const credentialAuth = async (
	values: z.infer<typeof LoginFormSchema>,
): Promise<UserLoginAuthResponse | ErrorResponse> => {
	const validatedFields = LoginFormSchema.safeParse(values);

	if (!validatedFields.success) {
		return {
			message: 'Please complete all required fields',
			status_code: 401,
			success: false,
		};
	}
	const { emailOrUsername, password, rememberMe } = values;
	const payload = { emailOrUsername, password, rememberMe };

	try {
		const response = await authServices.login(payload);

		if (response.data !== null) {
			const { token } = response;
			const user = jwtDecode(token) as { exp: 1 };

			cookies.set('auth_token', token, {
				expires: new Date(user.exp * 1000),
				path: '/',
			});
		}
		return response;
	} catch (error) {
		return customErrorMessage(error as Error);
	}
};

export default credentialAuth;
