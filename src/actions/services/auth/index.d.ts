export interface newUserRegistrationDto {
	fName: string;
	lName: string;
	email: string;
	password: string;
	tel: string;
	isSeller?: boolean;
}

export interface newUserRegistrationResponseDto {
	userId: string;
	fName: string;
	lName: string;
	email: string;
	tel: string;
	role: string;
}

export interface UserLoginAuthDetails {
	emailOrUsername: string;
	password: string;
	rememberMe?: boolean;
}

export interface User {
	userId: string;
	fName: string;
	lName: string;
	email: string;
	role: string;
}
