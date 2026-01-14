import { StarIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface TestimonialsProps {
	ratings: number;
	imageLink: string;
	name: string;
	role: string;
	review: string;
}

const TestimonialCard = ({
	ratings,
	imageLink,
	name,
	role,
	review,
}: TestimonialsProps) => {
	return (
		<div className='border min-w-80 w-80 h-80 py-5 px-8 rounded-3xl flex flex-col justify-around'>
			<div className='flex gap-3 mt-2'>
				{Array.from({ length: 5 }, (_, index) => (
					<StarIcon
						key={index}
						size={16}
						className={index < ratings ? 'text-yellow-400' : 'text-gray-300'}
						fill={index < ratings ? 'gold' : 'none'}
					/>
				))}
			</div>
			<p className='pt-5 text-primary/60 font-lato text-start italic'>
				{review}
			</p>

			<div className='mt-5 flex gap-3'>
				<Avatar className='w-12 h-12'>
					<AvatarImage src={imageLink} alt='@shadcn' className='' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div>
					<p className='font-bold font-robotoCondensed'>{name}</p>
					<p className='font-medium font-robotoCondensed'>{role}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
