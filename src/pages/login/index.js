import React from 'react';
import styles from './index.less';
import { Button } from 'antd';

function Index(props) {
	console.log(props);
	return (
		<div className={styles.body}>
			login
			<Button onClick={() => props.history.push('pity')}>loginSuccess</Button>
		</div>
	);
}

export default Index;