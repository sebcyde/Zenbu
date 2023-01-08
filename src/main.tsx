import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/All.scss';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Error from './Pages/Error/Error';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
