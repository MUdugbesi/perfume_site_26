import { Outlet, useNavigate } from 'react-router';
import Footer from '../footer/Footer';
import { useAuth } from '@/hooks/query/authQuery/useAuth';
import { useEffect } from 'react';
const RootLayout = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/');
			return;
		}
	});
	return (
		<div className='w-screen relative'>
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
