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

// perfume related types
export interface AddPerfumeReviewDetails {
	text: string;
	rating: number;
}

export interface PerfumeReviewWithUserDetails {
	reviewId: string;
	text: string;
	rating: number;
	userId: string;
	createdBy: {
		fName: string;
		lName: string;
		email: string;
		profileImage?: string;
	};
}
