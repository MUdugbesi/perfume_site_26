import TestimonialCard from '../card/TestimonialCard';
import { TestimonialList } from './DataList';

const Testimonials = () => {
	return (
		<div className='mt-40'>
			<p className='font-lato text-center text-2xl font-extrabold pb-20'>
				Testimonials
			</p>
			<div className='flex gap-10 overflow-hidden'>
				{TestimonialList.map(
					({ name, role, imageLink, ratings, review }, index) => (
						<TestimonialCard
							name={name}
							role={role}
							imageLink={imageLink}
							ratings={ratings}
							review={review}
							key={index}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Testimonials;
