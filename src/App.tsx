import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import TopNav from './Components/Global/TopNav';
import { auth } from './Config/Firebase';
import Anime from './Pages/Anime/Anime';
import SignIn from './Pages/Authentication/SignIn';
import SignUp from './Pages/Authentication/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import Error from './Pages/Error/Error';
import Settings from './Pages/Settings/Settings';
import StockNews from './Components/Stocks/News/AllNews';
import Stocks from './Pages/Stocks/Stocks';

function App() {
	const [MainNav, setMainNav] = useState<JSX.Element | undefined>(undefined);
	const [Loading, setLoading] = useState(false);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	// initial app loading
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	// Navigate to sign in if no user
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				console.log('From App. No User Present');
				navigate('/signin');
				setMainNav(undefined);
			} else {
				navigate('/');
				setMainNav(<TopNav />);
			}
		});
	}, [user]);

	return (
		<div className="App">
			{MainNav}
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/anime" element={<Anime />} />
				<Route path="/stocks" element={<Stocks />}>
					<Route path="news" element={<StockNews />} />
				</Route>
				<Route path="/settings" element={<Settings />} />
				<Route path="*" element={<Error />} />
			</Routes>
			{/* <BotNavbar /> */}
		</div>
	);
}

export default App;
