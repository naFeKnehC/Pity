import React from 'react';
import styles from './app.less';
import { Button } from 'antd';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Error404 from './pages/error404';

function App(props) {
	return (
		<div className={styles.test}>
			<div className={styles.test1}>react app</div>
			<Button type={'primary'}>
				111
			</Button>

			<BrowserRouter>
				<Routes>
					<Route exact={true} path='/' element={<Login />} />
					<Route path='/home' element={<Home />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;