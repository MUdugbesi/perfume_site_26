import { useState } from 'react';
import { PerfumeMiniList } from '../homepage/DataList';
import { MoveLeft, MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import MiniCard from '../card/MiniCard';

const PerfumeMiniCards = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [exitingId, setExitingId] = useState<number>(0);
	const [nextId, setNextId] = useState<number>(1);
	const [prevId, setPrevId] = useState<number>(0);

	const handleNextSlide = () => {
		setExitingId(currentSlide);
		setCurrentSlide((prev) =>
			prev < PerfumeMiniList.length - 1 ? prev + 1 : 0
		);
		setNextId((prev) => (prev < PerfumeMiniList.length - 1 ? prev + 1 : 1));
		setPrevId((prev) => (prev === 0 ? 0 : prev + 1));
	};

	const handlePrevSlide = () => {
		setExitingId((prev) => (prev > 0 ? prev - 1 : 0));
		setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
		setPrevId((prev) => (prev > 0 ? prev - 1 : 0));
		setNextId((prev) =>
			prev < PerfumeMiniList.length - 1 ? prev + 1 : prev - 1
		);
	};
	return (
		<>
			<div className='flex relative mt-24 h-[15vh]'>
				{PerfumeMiniList.map(({ name, image, price, description, id }) => (
					<MiniCard
						name={name}
						image={image}
						price={price}
						description={description}
						currentSlide={currentSlide}
						id={id}
						exitingId={exitingId}
						nextId={nextId}
						prevId={prevId}
						key={id}
					/>
				))}
			</div>

			<div className='relative flex gap-10 items-center'>
				<div className='flex gap-2'>
					{Array.from({ length: 3 }, (_, index) => (
						<div
							key={index}
							className={cn('w-16 h-1 bg-black/30 rounded-md', {
								'bg-black': currentSlide === index,
							})}
						></div>
					))}
				</div>

				<div className='flex gap-2'>
					<div
						className={cn(
							'w-12 h-12 bg-black rounded-full flex items-center justify-center',
							{
								'bg-primary/10 text-primary/10': currentSlide === 0,
							}
						)}
					>
						<MoveLeft
							className={cn('text-white hover:cursor-pointer', {
								'text-primary/10 hover:cursor-not-allowed': currentSlide === 0,
							})}
							onClick={() => currentSlide !== 0 && handlePrevSlide()}
						/>
					</div>
					<div
						className={cn(
							'w-12 h-12 bg-white rounded-full flex items-center justify-center border',
							{
								'bg-primary/10 text-primary/10':
									currentSlide === PerfumeMiniList.length - 1,
							}
						)}
					>
						<MoveRight
							className={cn('text-black hover:cursor-pointer', {
								'text-primary/10 hover:cursor-not-allowed':
									currentSlide === PerfumeMiniList.length - 1,
							})}
							onClick={() =>
								currentSlide !== PerfumeMiniList.length - 1 && handleNextSlide()
							}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PerfumeMiniCards;
