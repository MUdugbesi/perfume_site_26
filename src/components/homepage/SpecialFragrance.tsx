import Perfume3 from '@/assets/perfume3.jpg';
import SpecialButton from '../miscellaneous/SpeciaButton';
import { LucideArrowUpRight } from 'lucide-react';

const SpecialFragrance = () => {
	return (
		<div className='mt-40 w-[50%] h-100 mx-auto grid grid-cols-2 shadow-md'>
			<div className='relative'>
				<img
					src={Perfume3}
					alt='perfume_image'
					className='w-100 h-100 object-cover'
				/>
				<p className='absolute bottom-5 flex justify-center w-full font-bold text-white drop-shadow-md drop-shadow-black'>
					Special Fragrance
				</p>
			</div>

			<div className='flex items-center flex-col justify-center'>
				<h3 className='font-lato font-extrabold'>Care Packages</h3>
				<p className='w-65 text-sm text-center mt-2 text-black/80'>
					Selected top fragrance from our customer and reviews, check it out to
					get yours{' '}
				</p>
				<SpecialButton text='View' icon={<LucideArrowUpRight />} />
			</div>
		</div>
	);
};

export default SpecialFragrance;
