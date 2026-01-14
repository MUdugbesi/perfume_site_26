import { cn } from '@/lib/utils';
import { ServiceInfoList } from './DataList';

const ServiceCard = () => {
	return (
		<div className='w-[80%] mx-auto h-60 rounded-lg bg-black grid grid-cols-4 items-start pt-5'>
			{ServiceInfoList.map((info, index) => (
				<div className='w-full flex flex-col items-center' key={index}>
					<div
						className={cn(
							`w-50 h-20 text-${info.color} flex items-center justify-center`
						)}
					>
						{info.image}
					</div>
					<p className='text-white font-extrabold font-lato'>{info.title}</p>
					<p className='text-white/60 mt-4 text-wrap w-[60%] text-center mx-auto font-robotoCondensed'>
						{info.description}
					</p>
				</div>
			))}
		</div>
	);
};

export default ServiceCard;
