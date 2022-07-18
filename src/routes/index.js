import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from '../pages/home';

export default function Router({ history }) {
	return useRoutes([
		{
			path: 'home',
			element: <Home history={history} />
		},
		{
			path: 'test',
			element: <div>test</div>
		},
		{
			path: 'home/:id',
			element: <div>home2</div>
		},
		{
			path: '*',
			element: <div>404</div>
		}
	]);
}