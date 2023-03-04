import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BotNavbar from './Components/Global/BotNavbar';
import TopNav from './Components/Global/TopNav';
import Anime from './Pages/Anime/Anime';
import Dashboard from './Pages/Dashboard/Dashboard';
import Error from './Pages/Error/Error';
import Settings from './Pages/Settings/Settings';
import StockNews from './Pages/Stocks/AllNews';
import Stocks from './Pages/Stocks/Stocks';

function App() {
	return (
		<div className="App">
			<TopNav />
			<Routes>
				<Route path="/" element={<Dashboard />} />
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
