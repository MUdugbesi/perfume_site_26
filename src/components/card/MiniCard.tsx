import { cn } from '@/lib/utils';
import { PerfumeMiniList } from '../homepage/DataList';

interface MiniCardProps {
	name: string;
	image: string;
	price: number;
	description: string;
	currentSlide: number;
	id: number;
	exitingId: number;
	nextId: number;
	prevId: number;
}

const MiniCard = ({
	name,
	image,
	price,
	description,
	currentSlide,
	id,
	exitingId,
	nextId,
	prevId,
}: MiniCardProps) => {
	return (
		<div
			className={cn(
				`grid grid-cols-[55%_45%] rounded-lg absolute h-32 px-4 py-2 bg-black w-62.5 shadow-xs gap-6 transition-all duration-700 ease-out`,
			)}
			style={{
				transform:
					currentSlide === id
						? 'translate(-5px, 5px)'
						: exitingId === id
							? 'translate(40px, -40px)'
							: nextId === id
								? 'translate(20px, -20px)'
								: prevId === id
									? 'translate(20px, -20px)'
									: `translate(45px, -45px)`,
				zIndex:
					currentSlide === id
						? 20
						: id === exitingId
							? 0
							: id === nextId
								? 10
								: id === PerfumeMiniList.length - 1
									? 0
									: 10,
			}}
		>
			{/* content */}
			<div>
				<span className='relative text-white font-lato text-lg font-bold uppercase'>
					{name.slice(0, 8) + '...'}
				</span>
				<p className='text-secondary/60 text-[10px] font-lato'>
					{description.slice(0, 40) + '...'}
				</p>
				<p className='text-secondary/60 mt-8 font-robotoCondensed'>${price}</p>
			</div>

			<img
				src={image}
				alt={description}
				className='rounded-md object-cover h-28 w-20'
			/>
		</div>
	);
};

export default MiniCard;
