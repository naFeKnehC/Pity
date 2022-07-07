import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './app';

const Index = () => {
	return (
		<App />
	);
};

const pity = document.getElementById('pity');
const root = createRoot(pity);
root.render(<Index />);