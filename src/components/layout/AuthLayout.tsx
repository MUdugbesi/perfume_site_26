import { Outlet } from 'react-router';
import ImageSlider from '../shared/ImageSlider';

const AuthLayout = () => {
	return (
		<main className='grid grid-cols-2 w-screen h-screen overflow-hidden'>
			<Outlet />
			<ImageSlider />
		</main>
	);
};

export default AuthLayout;
