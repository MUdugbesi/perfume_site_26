import perfumeServices from '@/actions/services/perfume/perfume-services';
import { getToken } from '@/lib/user-auth';
import { useQuery } from '@tanstack/react-query';
import { RequestStatus } from '..';

export function useGetAllPerfumes() {
	const token = getToken();
	const {
		data: perfumes,
		status,
		refetch,
	} = useQuery({
		queryKey: ['perfumes'],
		queryFn: () => perfumeServices.getAllPerfumes(),
		retry: !!token,
		staleTime: 5 * 60 * 1000,
		enabled: !!token,
	});

	if (!token) return { perfumes: null, status: RequestStatus.error };

	return { perfumes, status: RequestStatus[status], refetchPerfumes: refetch };
}

export function useGetFeaturedPerfumes() {
	const token = getToken();
	const {
		data: featuredPerfumes,
		status,
		refetch,
	} = useQuery({
		queryKey: ['featuredPerfumes'],
		queryFn: () => perfumeServices.getFeaturedPerfumes(),
		retry: !!token,
		staleTime: 5 * 60 * 1000,
		enabled: !!token,
	});

	if (!token) return { perfume: null, status: RequestStatus.error };

	return {
		featuredPerfumes,
		perfumeRequestStatus: RequestStatus[status],
		refetchFeaturedPerfumes: refetch,
	};
}
