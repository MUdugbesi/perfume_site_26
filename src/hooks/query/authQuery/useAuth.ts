import { getToken, removeToken } from '@/lib/user-auth';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { RequestStatus } from '..';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import { toast } from 'sonner';
import authServices from '@/actions/services/auth/auth-services';

export function useAuth() {
	const token = getToken();
	const {
		data: user,
		status,
		refetch,
	} = useQuery({
		queryKey: ['user'],
		queryFn: () => authServices.getCurrentUser(),
		retry: !!token,
		staleTime: 5 * 60 * 1000,
		enabled: !!token,
	});

	if (!token) return { user: null, status: RequestStatus.error };

	return { user, status: RequestStatus[status], refetchAuth: refetch };
}

export function useLogout() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const logout = useCallback(() => {
		toast.info('Logging out user, thus might take some time!');
		setTimeout(() => {
			removeToken();
			queryClient.removeQueries({ queryKey: ['user'], exact: true });
			navigate('/');
			toast.success('User logged out successfully!');
		}, 2000);
	}, [navigate, queryClient]);

	return logout;
}
