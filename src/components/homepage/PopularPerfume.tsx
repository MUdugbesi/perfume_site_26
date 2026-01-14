import { MoveLeft, MoveRight } from 'lucide-react';
import PerfumeCard from '../card/PerfumeCard';
import { PerfumeList } from './DataList';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const PopularPerfume = () => {
	const [initialIndex, setInitialIndex] = useState<number>(0);
	const [lastIndex, setLastIndex] = useState<number>(4);
	const filteredList = PerfumeList.slice(initialIndex, lastIndex);

	const handleNextPerfume = () => {
		setLastIndex((prev) => (prev < PerfumeList.length ? prev + 1 : 4));
		if (initialIndex > PerfumeList.length - 5) {
			setInitialIndex(0);
		} else {
			setInitialIndex((prev) => (prev < PerfumeList.length ? prev + 1 : 0));
		}
	};

	const handlePrevPerfume = () => {
		setInitialIndex((prev) => (prev > 0 ? prev - 1 : 0));
		setLastIndex((prev) => (prev > 4 ? prev - 1 : 4));
	};
	return (
		<div className='w-full mt-40 flex gap-10 flex-col'>
			<div className='flex items-center justify-between w-[80%] mx-auto'>
				<p className='font-extrabold text-2xl'>Popular Perfume Brands</p>
				<div className='flex gap-2'>
					<div
						className={cn(
							'w-12 h-12 bg-black rounded-full flex items-center justify-center',
							{
								'bg-primary/10 text-primary/10': initialIndex === 0,
							}
						)}
					>
						<MoveLeft
							className={cn('text-white hover:cursor-pointer', {
								'text-primary/10 hover:cursor-not-allowed': initialIndex === 0,
							})}
							onClick={() => initialIndex > 0 && handlePrevPerfume()}
						/>
					</div>
					<div
						className={cn(
							'w-12 h-12 bg-white rounded-full flex items-center justify-center border',
							{
								'bg-primary/10 text-primary/10': '',
							}
						)}
					>
						<MoveRight
							className={cn('text-black hover:cursor-pointer', {
								'text-primary/10 hover:cursor-not-allowed':
									lastIndex === PerfumeList.length,
							})}
							onClick={() =>
								lastIndex !== PerfumeList.length && handleNextPerfume()
							}
						/>
					</div>
				</div>
			</div>

			<div className='flex gap-10 items-center justify-center mt-5'>
				{filteredList.map(({ name, image, price, rating }, index) => (
					<PerfumeCard
						name={name}
						image={image}
						price={price}
						rating={rating}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default PopularPerfume;
