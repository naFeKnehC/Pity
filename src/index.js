import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const Index = () => (
	<div>
		<App />
	</div>
);

const pity = document.getElementById('pity');
const root = createRoot(pity);
root.render(<Index />);