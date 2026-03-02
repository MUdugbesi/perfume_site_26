import { Outlet } from 'react-router';
import ImageSlider from '../shared/ImageSlider';

const AuthLayout = () => {
	return (
		<main className='w-screen h-screen  overflow-hidden relative flex items-center justify-center bg-black/20'>
			<Outlet />
			<ImageSlider />
		</main>
	);
};

export default AuthLayout;
