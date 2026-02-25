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

//perfume related types

export interface Perfume {
	id: string;
	perfumeName: string;
	perfumeQty: number;
	perfumeCost: number;
	perfumeDescription: string;
	perfumeImage: string;
	isFeatured: boolean;
	perfumeTags: string[];
	perfumeIngredients: string[];
	perfumeReviews: PerfumeReviewDetails[];
	createdAt: string;
}

export interface PerfumeReviewDetails {
	reviewId: string;
	userId: string;
	rating: number;
	text: string;
	createdAt: string;
}
