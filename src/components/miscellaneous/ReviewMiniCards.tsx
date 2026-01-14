import { useEffect, useState } from 'react';
import { ReviewList } from '../homepage/DataList';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { StarIcon } from 'lucide-react';


const ReviewMiniCards = () => {
	const [index, setIndex] = useState<number>(0);
	const currentReview = ReviewList[index];

	useEffect(() => {
		const interval = setTimeout(() => {
			setIndex((prev) => (prev < ReviewList.length - 1 ? prev + 1 : 0));
        }, 10000);
        
		return () => clearInterval(interval);
	}, [index]);

	return (
		<div className='w-50 h-25 absolute bottom-20 -left-20 rounded-4xl bg-white backdrop-blur-sm border-black/10 shadow-md flex gap-4 justify-center items-center'>
			<div className='flex items-center justify-center'>
				<Avatar className='w-12 h-12'>
					<AvatarImage
						src={currentReview.imageLink}
						alt='@shadcn'
						className=''
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
			<div className='flex flex-col items-start'>
				<p className='font-extrabold font-lato text-lg'>{currentReview.name}</p>
				<p className='font-medium text-primary/45 text-sm'>
					{currentReview.review}
				</p>
				<div className='flex gap-0.5 mt-2'>
					{Array.from({ length: 5 }, (_, index) => (
						<StarIcon
							key={index}
							size={16}
							className={
								index < currentReview.rating
									? 'text-yellow-400'
									: 'text-gray-300'
							}
							fill={index < currentReview.rating ? 'gold' : 'none'}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ReviewMiniCards;
