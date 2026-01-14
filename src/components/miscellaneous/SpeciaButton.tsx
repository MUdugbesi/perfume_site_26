import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

const SpecialButton = ({
	text,
	onclick,
	icon,
}: {
	text: string;
	onclick?: () => void;
	icon?: ReactNode;
}) => {
	return (
		<div
			className='h-14 w-32 mt-5 bg-black relative flex mb-4 rounded-lg after:bg-black after:w-full after:rounded-lg after:h-14 after:rounded-r-lg after:absolute after:-right-3 transform after:-skew-x-18 text-white items-center justify-center group hover:cursor-pointer font-semibold font-lato hover:scale-[1.02] transition-all duration-300 ease-out'
			onClick={onclick}
		>
			<span
				className={cn('z-10 group-hover:cursor-pointer', {
					'flex items-center gap-1': icon,
				})}
			>
				{text}
				{icon}
			</span>
		</div>
	);
};

export default SpecialButton;
