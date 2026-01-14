import { Minus } from 'lucide-react';
import logoImage from '@/assets/login/login.png';
import perfume1 from '@/assets/perfume1.jpg';
import perfume2 from '@/assets/perfume2.jpg';
import { useEffect, useState } from 'react';

const ImageSlider = () => {
	const ImageSliderContainer = [
		{
			image: logoImage,
			text: 'This is a first text about perfume',
			author: 'Marvelous Udugbesi',
		},
		{
			image: perfume1,
			text: 'This is a second text about perfume',
			author: 'Ayorinde Henry',
		},
		{
			image: perfume2,
			text: 'This is a third text about perfume',
			author: 'Kehinde Raph',
		},
	];

	const [presentSlide, setPresentSlide] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPresentSlide((prev) =>
				prev === ImageSliderContainer.length - 1 ? 0 : prev + 1
			);
		}, 10000);

		return () => clearInterval(interval);
	}, [ImageSliderContainer.length]);

	return (
		<section className='w-full relative flex items-center justify-center'>
			<img
				src={ImageSliderContainer[presentSlide].image}
				alt='logo_image'
				className='h-screen w-screen object-cover'
			/>
			<div className='absolute w-[70%] bottom-8 mx-auto h-24 mt-5 rounded-lg bg-white/10 backdrop-blur-2xl shadow-lg shadow-black/20 border border-white/20 px-4 py-2 flex justify-between'>
				<div className='relative w-full'>
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
								<div className='flex items-center italic'>
									<Minus /> {slide.author}
								</div>
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ImageSlider;
