import { useState } from 'react';
import LoginForm from '@/components/forms/LoginForm';
import RegisterForm from '@/components/forms/RegisterForm';
import AuthTabs from '@/components/forms/AuthTabs';

const AuthPage = () => {
	const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

	const handleTabChange = (tab: 'login' | 'register') => {
		setActiveTab(tab);
	};
	return (
		<main className='flex flex-col h-screen items-center justify-center w-[60%] mx-auto'>
			<div className='w-fit flex flex-col justify-start items-center mb-20'>
				{/* <img src={logoImage} alt='logo' width={50} height={50} />
				<p className='font-pacifico font-bold uppercase tracking-tight'>
					H & SONS
				</p> */}
			</div>
			<AuthTabs activeTab={activeTab} handleTabChange={handleTabChange} />
			<div className='min-h-[50vh] w-full'>
				{activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
			</div>
		</main>
	);
};

export default AuthPage;
