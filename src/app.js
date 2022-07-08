import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Pity from './pity';
import Login from './pages/login';
import Error404 from './pages/error404';

function App() {
	const history = createBrowserHistory();

	return (
		<BrowserRouter>
			<Routes history={history}>
				<Route path='/' element={<Login />} />
				<Route path='/pity/*' element={<Pity />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;