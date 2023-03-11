import ReactDOM from 'react-dom/client';
import './Styles/All.scss';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Provider from 'react-redux/es/components/Provider';
import { store } from './Store/Store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
