import React from 'react';
import styles from './app.less';
import { Button } from 'antd';

function App(props) {

	return (
		<div className={styles.test}>
			<div className={styles.test1}>react app</div>
			<Button type={'primary'}>test</Button>
		</div>
	);
}

export default App;