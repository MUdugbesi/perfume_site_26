import Perfume3 from '@/assets/perfume3.jpg';
import SpecialButton from '../miscellaneous/SpeciaButton';
import { LucideArrowUpRight } from 'lucide-react';

const SpecialFragrance = () => {
	return (
		<>
			<p className='mt-40 font-bold text-black text-center text-2xl'>Special Fragrance</p>
			<div className='w-[50%] h-100 mx-auto grid grid-cols-2 shadow-md mt-20'>
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
						Selected top fragrance from our customer and reviews, check it out
						to get yours{' '}
					</p>
					<SpecialButton text='View' icon={<LucideArrowUpRight />} />
				</div>
			</div>
		</>
	);
};

export default SpecialFragrance;
