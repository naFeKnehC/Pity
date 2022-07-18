import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import Router from './routes';

const { Header, Sider, Content } = Layout;

const Pity = ({ history }) => {

	return (
		<Layout style={{ height: '100%' }}>
			<Sider theme={'light'}>
				<nav>
					<div><Link to='home'>home</Link></div>
					<div><Link to={'test'}>test</Link></div>
					<Link to='setting'>setting</Link>
				</nav>
			</Sider>
			<Layout>
				<Header style={{ background: 'rgb(16 22 26 / 10%)' }}>pity</Header>
				<Content>
					<Layout style={{ height: '100%' }}>
						<div>tab bar</div>
						<Content>
							<Router history={history} />
						</Content>
					</Layout>
				</Content>
			</Layout>
		</Layout>
	);
};

export default Pity;