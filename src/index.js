import React from 'react';
import reactDom from 'react-dom';
import App from './app';

const Index = () => (
	<div>
		<App />
	</div>
);

reactDom.render(<Index />, document.getElementById('pity'));