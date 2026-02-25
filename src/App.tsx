import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { PerfumeBottleLoader } from './components/shared';
import { RootLayout, AuthLayout } from './components/layout';
import { HomePage } from './pages';
import { Toaster as Sonner } from 'sonner';
import { AuthRoute, ProtectedRoute } from './shared/ProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AuthPage = lazy(() => import('@/pages/auth/AuthPage'));
const queryClient = new QueryClient();

const App = () => {
	return (
		<Suspense fallback={<PerfumeBottleLoader />}>
			<QueryClientProvider client={queryClient}>
				<Sonner
					richColors
					expand={true}
					position='top-right'
					className='z-50'
				/>
				<Router>
					<Routes>
						<Route element={<AuthLayout />}>
							<Route element={<AuthRoute />}>
								<Route path='/auth' element={<AuthPage />} />
							</Route>
						</Route>
						<Route element={<RootLayout />}>
							<Route element={<HomePage />} path='/' />

							<Route element={<ProtectedRoute />}>
								<Route path='/home' element={<HomePage />} />
							</Route>
						</Route>
					</Routes>
				</Router>
			</QueryClientProvider>
		</Suspense>
	);
};

export default App;
