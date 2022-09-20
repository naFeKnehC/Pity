import React from "react";
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import Pity from './Pity';

const rootElement = document.getElementById("pity");
if (!rootElement) {
  throw new Error('no root!');
}
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pity/>
    </BrowserRouter>
  </React.StrictMode>
);
