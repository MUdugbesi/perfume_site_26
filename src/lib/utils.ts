import type { ErrorResponse, UserRole } from '@/types';
import { isAxiosError } from 'axios';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const customErrorMessage = (error: Error): ErrorResponse => {
	return {
		message:
			isAxiosError(error) && error.response && error.response.data.message
				? error.response.data.message
				: error.message,
		status_code:
			isAxiosError(error) && error.response ? error.response.status : 0,
		success: false,
	};
};

export const getDashboardRoute = (role: UserRole) => {
	switch (role) {
		case 'admin':
			return '/admin/dashboard';
		case 'seller':
			return '/seller/dashboard';
		case 'buyer':
			return '/buyer/dashboard';
	}
};
