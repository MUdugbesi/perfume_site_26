import PerfumeMiniCards from '../miscellaneous/PerfumeMiniCards';
import Perfume6 from '@/assets/tom_ford.png';
import ReviewMiniCards from '../miscellaneous/ReviewMiniCards';
import { useGetFeaturedPerfumes } from '@/hooks/query/perfumeQuery';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/query/authQuery/useAuth';
import type { Perfume } from '@/types';

const Hero = () => {
	const { user } = useAuth();
	const { featuredPerfumes, perfumeRequestStatus } = useGetFeaturedPerfumes();
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [randomIndex, setRandomIndex] = useState<number | null>(() => null);

	useEffect(() => {
		if (!featuredPerfumes?.length) return;
		setTimeout(() => {
			setRandomIndex(Math.floor(Math.random() * featuredPerfumes.length));
		}, 0);
	}, [featuredPerfumes]);

	const activeFeaturedPerfume =
		randomIndex !== null
			? featuredPerfumes && featuredPerfumes[currentSlide]
			: null;

	return (
		<div className='grid grid-cols-2 mx-auto h-screen w-full'>
			<section className='flex flex-col justify-center'>
				{!user || perfumeRequestStatus !== 'authenticated' ? (
					<>
						<h2 className='text-[64px] font-extrabold leading-20 font-lato'>
							Tom Ford Black Orchid For Women.
						</h2>

						<p className='mt-10 text-primary/40 font-robotoCondensed text-xl'>
							With the richness of black floral and the smooth power of warm{' '}
							<br />
							accords, Black Orchid awakens the senses instantly.
						</p>

						<div className='h-14 w-32 mt-10 bg-black relative flex mb-4 rounded-lg after:bg-black after:w-full after:rounded-lg after:h-14 after:rounded-r-lg after:absolute after:-right-3 transform after:-skew-x-18 text-white items-center justify-center group hover:cursor-pointer font-semibold font-lato hover:scale-[1.02] transition-all duration-300 ease-out'>
							<span className='z-10 group-hover:cursor-pointer'>Explore</span>
						</div>
					</>
				) : (
					featuredPerfumes &&
					featuredPerfumes.length > 0 &&
					activeFeaturedPerfume && (
						<>
							<h2 className='text-[64px] font-extrabold leading-20 font-lato'>
								{activeFeaturedPerfume.perfumeName}
							</h2>

							<p className='mt-10 text-primary/40 font-robotoCondensed text-xl'>
								{activeFeaturedPerfume.perfumeDescription}
							</p>

							<div className='h-14 w-32 mt-10 bg-black relative flex mb-4 rounded-lg after:bg-black after:w-full after:rounded-lg after:h-14 after:rounded-r-lg after:absolute after:-right-3 transform after:-skew-x-18 text-white items-center justify-center group hover:cursor-pointer font-semibold font-lato hover:scale-[1.02] transition-all duration-300 ease-out'>
								<span className='z-10 group-hover:cursor-pointer'>Explore</span>
							</div>
						</>
					)
				)}

				<PerfumeMiniCards
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
					featuredPerfumes={featuredPerfumes as Perfume[]}
				/>
			</section>

			<section className='relative mt-20 flex justify-center'>
				<div className='relative w-[72%] h-[72%]'>
					<img
						src={
							activeFeaturedPerfume
								? activeFeaturedPerfume.perfumeImage
								: Perfume6
						}
						alt='tom_ford_perfume'
						className='w-full h-full rounded-[30%] shadow-[6px_10px_0px_rgba(0,0,0,0.8)] pr-3 object-cover relative object-center'
					/>
					<ReviewMiniCards
						reviews={activeFeaturedPerfume?.perfumeReviews || []}
					/>
				</div>
			</section>
		</div>
	);
};

export default Hero;
