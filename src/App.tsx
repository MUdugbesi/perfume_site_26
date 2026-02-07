import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { PerfumeBottleLoader } from './components/shared';
import { RootLayout, AuthLayout } from './components/layout';
import { HomePage } from './pages';

const AuthPage = lazy(() => import('@/pages/auth/AuthPage'));

const App = () => {
	return (
		<Suspense fallback={<PerfumeBottleLoader />}>
			<Router>
				<Routes>
					<Route element={<AuthLayout />}>
						<Route path='/' element={<AuthPage />} />
					</Route>
					<Route element={<RootLayout />}>
						<Route path='/home' element={<HomePage />} />
						<Route path='/' element={<HomePage />} />
						<Route path='/' element={<HomePage />} />
					</Route>
				</Routes>
			</Router>
		</Suspense>
	);
};

export default App;
