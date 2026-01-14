import { StarIcon } from 'lucide-react';

interface PerfumeProps {
	image: string;
	name: string;
	rating: number;
	price: number;
}

const PerfumeCard = ({ image, name, rating, price }: PerfumeProps) => {
	return (
		<section className='w-55 h-62 rounded-xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.8)] shadow-black p-4 font-lato transition-all duration-300 ease-linear'>
			<img
				src={image}
				alt={name}
				className='w-50 h-40 rounded-xl object-cover object-center mx-auto'
			/>

			<div className='mt-4 flex items-center justify-between'>
				<div>
					<p className='uppercase font-extrabold text-xs'>{name}</p>
					<p className='mt-1.5 inline-flex items-center gap-1'>
						<StarIcon className='text-amber-300' size={16} fill='gold' />
						<span className='text-xs font-bold'>{rating} out of 5</span>
					</p>
				</div>

				<p className='font-extrabold'>${price}</p>
			</div>
		</section>
	);
};

export default PerfumeCard;
