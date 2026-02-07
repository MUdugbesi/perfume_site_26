import { LogOutIcon, ShoppingCartIcon, User2Icon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Nav_Links } from './NavLink';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/query/authQuery/useAuth';

const NavBar = () => {
	const navigate = useNavigate();
	const { logout, isAuthenticated } = useAuth();
	const { pathname } = useLocation();
	const [, setCurrentHeight] = useState<number>(0);
	const [isHidden, setIsHidden] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setCurrentHeight((prev) => {
				const current = window.scrollY;
				setIsHidden(current > 96 && current > prev);

				return current;
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const LogoutUser = () => {
		logout();
		navigate('/');
	};

	console.log(isAuthenticated);

	/* Disappears on scroll down and appears when user scrolls back up - floating type action navigation */
	return (
		<nav
			className={cn(
				'h-24 bg-white drop-shadow-2xl drop-shadow-black/50 w-[90%] mx-auto top-0 rounded-2xl flex items-center justify-between px-20 fixed transition-all duration-700 ease-in-out will-change-transform z-40 left-20',
				{
					'-translate-y-full': isHidden,
					'translate-y-0 mt-5': !isHidden,
				},
			)}
		>
			{/* company name */}
			<Link
				to={'/home'}
				className='font-lato uppercase font-extrabold tracking-wide ml-10'
			>
				Perfume
			</Link>

			<div className='flex w-[50%] justify-between'>
				<ul className=' flex justify-evenly items-center gap-14 ml-20'>
					{Nav_Links.map((link, i) => (
						<li
							className='flex flex-col items-center justify-center gap-2 transition-all duration-500 ease-out group'
							key={i}
						>
							<Link
								to={link.link}
								className={cn(
									'font-lato font-medium text-primary w-fit text-sm',
									{
										'font-bold': pathname === link.link,
									},
								)}
							>
								{link.title}
							</Link>

							<div
								className={cn(
									'w-1.5 h-1.5 rounded-full bg-white flex',
									{
										'group-hover:bg-black/50 transition-all duration-300 ease-out':
											pathname !== link.link,
									},
									{
										'bg-black': pathname === link.link,
									},
								)}
							></div>
						</li>
					))}
				</ul>

				<div className='flex gap-8 ml-10'>
					<ShoppingCartIcon
						className='cursor-pointer hover:text-black/60'
						size={20}
					/>
					<User2Icon className='cursor-pointer hover:text-black/60' size={20} />
					{isAuthenticated && (
						<LogOutIcon
							className='cursor-pointer hover:text-black/60'
							size={20}
							onClick={() => LogoutUser()}
						/>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
