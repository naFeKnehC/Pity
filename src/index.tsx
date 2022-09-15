import * as React from "react";
import * as ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './app';
// import './index.css';
import {Hello} from "./pages/Hello";

const rootElement = document.getElementById("pity");
const root = createRoot(rootElement);

root.render(
    // <React.StrictMode>
    //     <BrowserRouter>
    //     <App />
    <Hello compiler="TypeScript" framework="React"/>
    // </BrowserRouter>
    // </React.StrictMode>
);

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("pity")
// );