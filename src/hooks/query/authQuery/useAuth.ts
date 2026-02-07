import { useState } from 'react';

export function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
		localStorage.getItem('isAuthenticated') === 'true',
	);
	const login = ({
		password,
		usernameOrEmail,
	}: {
		password: string;
		usernameOrEmail: string;
	}) => {
		if (!password || !usernameOrEmail) {
			return;
		}

		if (
			password === 'password' &&
			(usernameOrEmail === 'admin' || usernameOrEmail === 'user')
		) {
			setIsAuthenticated(true);
			localStorage.setItem('isAuthenticated', 'true');
		}
	};

	const logout = () => {
		setIsAuthenticated(false);
		localStorage.removeItem('isAuthenticated');
	};
	return {
		isAuthenticated,
		login,
		logout,
	};
}
