export function PerfumeBottleLoader() {
	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center bg-background text-[#e6d8b5]'>
			<div className='relative h-20 w-12 overflow-hidden rounded-xl border border-[#e6d8b5]'>
				<div className='absolute bottom-0 w-full animate-fill bg-linear-to-t from-amber-600 to-amber-200' />
			</div>

			<p className='mt-6 text-xs tracking-[0.3em] uppercase'>Blending notes…</p>
		</div>
	);
}
