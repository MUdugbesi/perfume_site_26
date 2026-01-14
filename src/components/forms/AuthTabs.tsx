import { cn } from '@/lib/utils';
import { LogInIcon, UserStar } from 'lucide-react';

type AuthTab = 'login' | 'register';

interface AuthTabsProps {
	activeTab: AuthTab;
	handleTabChange: (tab: AuthTab) => void;
}

const AuthTabs = ({ activeTab, handleTabChange }: AuthTabsProps) => {
	return (
		<div className='h-9 w-[45%] bg-black/10 mx-auto rounded-md grid grid-cols-2 items-center px-0.5 gap-0.5 z-40 shadow-xs shadow-black/40'>
			<div
				className={cn(
					'text-sm h-8 w-full rounded-md text-center flex gap-2 items-center justify-center text-white font-robotoCondensed transition-all duration-300 ease-in cursor-pointer',
					{ 'bg-amber-500': activeTab === 'login' }
				)}
				onClick={() => handleTabChange('login')}
			>
				<LogInIcon size={15} />
				Login
			</div>
			<div
				className={cn(
					'text-sm h-8 w-full rounded-md text-center flex gap-2 items-center justify-center text-white font-robotoCondensed transition-all duration-300 ease-in cursor-pointer',
					{ 'bg-amber-500': activeTab === 'register' }
				)}
				onClick={() => handleTabChange('register')}
			>
				<UserStar size={15} />
				Register
			</div>
		</div>
	);
};

export default AuthTabs;
