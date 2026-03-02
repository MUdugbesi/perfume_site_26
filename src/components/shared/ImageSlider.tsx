import gradient1 from '@/assets/auth/ball1.png';
import gradient2 from '@/assets/auth/ball2.png';
import gradient3 from '@/assets/auth/ball3.png';
import gradient4 from '@/assets/auth/ball4.png';

import { useEffect, useState } from 'react';

const ImageSlider = () => {
	const ImageSliderContainer = [
		{
			image: gradient1,
			text: 'This is a first text about perfume',
			author: 'Marvelous Udugbesi',
		},
		{
			image: gradient2,
			text: 'This is a second text about perfume',
			author: 'Ayorinde Henry',
		},
		{
			image: gradient3,
			text: 'This is a third text about perfume',
			author: 'Kehinde Raph',
		},
		{
			image: gradient4,
			text: 'This is a fourth text about perfume',
			author: 'Kehinde Raph',
		},
	];

	const [presentSlide, setPresentSlide] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPresentSlide((prev) =>
				prev === ImageSliderContainer.length - 1 ? 0 : prev + 1,
			);
		}, 10000);

		return () => clearInterval(interval);
	}, [ImageSliderContainer.length]);

	return (
		<section className='w-full absolute inset-0 flex items-center justify-center border-none object-cover'>
			<div className='border h-full w-full absolute top-0 border-none'></div>
			<img
				src={ImageSliderContainer[presentSlide].image}
				alt='logo_image'
				className='h-screen w-screen object-cover'
			/>
			{/* <div className='absolute w-[70%] bottom-8 mx-auto h-24 mt-5 rounded-lg bg-white/10 backdrop-blur-2xl shadow-lg shadow-black/20 px-4 py-2 flex justify-between z-20 border-white border'> */}
			{/* <div className='relative w-full'>
					{ImageSliderContainer.map((slide, index) => (
						<div
							key={index}
							className={`
        absolute inset-0 transition-opacity duration-1000 flex justify-between
        ${index === presentSlide ? 'opacity-100' : 'opacity-0'}
      `}
						>
							<article className='font-outfit text-sm italic'>
								{slide.text}
							</article>
							<p className='text-xs mt-1 tracking-wide flex items-end justify-end h-full'>
								<small className='flex items-center italic'>
									<Minus /> {slide.author}
								</small>
							</p>
						</div>
					))}
				</div> */}
			{/* </div> */}
		</section>
	);
};

export default ImageSlider;
