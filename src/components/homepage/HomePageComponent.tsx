import NavBar from '../navigation/NavBar';
import Hero from './Hero';
import PopularPerfume from './PopularPerfume';
import ServiceCard from './ServiceCard';
import SpecialFragrance from './SpecialFragrance';
import Testimonials from './Testimonials';

const HomePageComponent = () => {
	return (
		<div className='w-[85%] mx-auto'>
			<div className='pt-32'>
				<NavBar />
			</div>
			<Hero />
			<ServiceCard />
			<PopularPerfume />
			<SpecialFragrance />
			<Testimonials />
		</div>
	);
};

export default HomePageComponent;
