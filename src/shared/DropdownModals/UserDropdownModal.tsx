import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth, useLogout } from '@/hooks/query/authQuery/useAuth';
import {
	CreditCardIcon,
	LogInIcon,
	LogOutIcon,
	SettingsIcon,
	User2Icon,
	UserIcon,
} from 'lucide-react';
import { useNavigate } from 'react-router';

const UserDropdownModal = () => {
	const { user } = useAuth();
	const logout = useLogout();

	const navigate = useNavigate();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<User2Icon className='cursor-pointer hover:text-black/60' size={20} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem disabled={!user}>
					<UserIcon />
					Profile
				</DropdownMenuItem>
				<DropdownMenuItem disabled={!user}>
					<CreditCardIcon />
					Billing
				</DropdownMenuItem>
				<DropdownMenuItem disabled={!user}>
					<SettingsIcon />
					Settings
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				{!user ? (
					<DropdownMenuItem
						variant={'default'}
						className='cursor-pointer'
						onClick={() => navigate('/auth')}
					>
						<LogInIcon />
						Log In
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem
						variant={'destructive'}
						className='cursor-pointer'
						onClick={() => logout()}
					>
						<LogOutIcon />
						Log out
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserDropdownModal;
