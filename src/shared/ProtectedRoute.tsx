import { getToken } from '@/lib/user-auth';
import { Navigate, Outlet } from 'react-router';
import { toast } from 'sonner';

export function ProtectedRoute() {
	const token = getToken();

	if (!token) {
		toast.error(
			'Unauthorize access, please kindly register or login to continue',
		);
		return <Navigate to='/auth' replace />;
	}

	return <Outlet />;
}

export function AuthRoute() {
	const token = getToken();

	if (token) {
		return <Navigate to='/' replace />;
	}

	return <Outlet />;
}
