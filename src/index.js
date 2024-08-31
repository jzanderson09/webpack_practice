import './styles.css';
import { greeting } from './greeting.js';
import odinImage from './odin.svg';

console.log(`${greeting} How are you today?`);

const image = document.createElement('img');
image.src = odinImage;

document.body.appendChild(image);

