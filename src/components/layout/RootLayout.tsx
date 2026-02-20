import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const RootLayout = () => {
	return (
		<div className='w-screen relative'>
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
