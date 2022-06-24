import './index.css';
import Icon from './icon.jpg';
import logFunc from './print';

const div = document.createElement('div');
div.innerHTML = 'devserver打包';
div.className = 'test';

const img = document.createElement('img');
img.src = Icon;

const btn = document.createElement('button');
btn.innerHTML = 'click me';
btn.onclick = logFunc;

div.appendChild(img);
div.appendChild(btn);

document.body.appendChild(div);