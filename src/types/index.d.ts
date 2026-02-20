export type UserRole = 'admin' | 'seller' | 'buyer';

export interface UserLoginAuthResponse {
	message: string;
	statusCode: number;
	token: string;
	data: {
		userId: string;
		fName: string;
		lName: string;
		email: string;
		tel: string;
		role: UserRole;
	};
}

export interface ErrorResponse {
	status_code: number;
	message: string;
	success: boolean;
}
