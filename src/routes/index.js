import React from 'react';
import { useRoutes } from 'react-router-dom';

import Index from '../pages/Home';
import Error404 from '../pages/error404';

export default function Router({ history }) {
	return useRoutes([
		{
			path: 'home',
			element: <Index history={history} />
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
			element: <Error404 />
		}
	]);
}
