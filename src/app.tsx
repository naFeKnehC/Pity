import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Pity from './pity';
import Login from './pages/login';
import Error404 from './pages/error404';

export interface props{}

function App() {
	const history = useNavigate();

	return (
		<Routes>
			<Route path='/' element={<Login history={history} />} />
			<Route path='pity/*' element={<Pity history={history} />} />
			<Route path='*' element={<Error404 />} />
		</Routes>
	);
}

export default App;
