import React from 'react';
import styles from './index.less';
import { Button } from 'antd';

function Index(props) {

	const login = () => {
		props.history('/pity/home', {
			state: { test: 'aaa' }
		});
	};

	return (
		<div className={styles.body}>
			login
			<Button onClick={login}>loginSuccess</Button>
		</div>
	);
}

export default Index;