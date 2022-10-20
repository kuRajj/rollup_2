import "./index.css";
import js from './assets/js.jpg';

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';
document.body.append(h1);

const jsImage = document.createElement('img');
jsImage.className = 'js-img';
jsImage.src = js;
document.body.append(jsImage);


