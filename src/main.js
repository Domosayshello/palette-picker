import './style.css';
import { v4 as uuidv4 } from 'uuid';

import { getPalettes, setPalettes, initPalettesIfEmpty, addPalette, removePalette } from './data-store';

// const displayPalette = () =>{

// };

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
    const formData = new FormData(event.target);
    const { paletteTitle, color1, color2, color3, temp } = Object.fromEntries(formData);
    form.reset();
 };

const main = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
};

main();

