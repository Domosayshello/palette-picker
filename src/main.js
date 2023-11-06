import './style.css';
import { v4 as uuidv4 } from 'uuid';
import { getPalettes, addPalette, removePalette} from './data-store';

class Palette {
    constructor (title, color1, color2, color3, temp){
        this.uuid = uuidv4();
        this.title = title;
        this.colors = [color1, color2, color3];
        this.temperature = temp;
    }
};

const createCard = (obj) => {
    const liEl = document.createElement('li');
    liEl.innerHTML += 
    `
    <div>
        <h3>${obj.title}</h3>
        <div>
            <div style = "background:${obj.colors[0]}>
                <p><span>Text</span> <span> Example</span></p>
            </div>
            <button>Copy\n${obj.color1}</button>
        </div>
        <button type ="button" data-uuid = ${obj.uuid}>Delete Palette</button>
        <p>${obj.temperature}</p>
    </div>
    `
    return liEl;
}
    
const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { paletteTitle, color1, color2, color3, temp } = Object.fromEntries(formData);
    const newPalette = new Palette (paletteTitle, color1, color2, color3, temp);

    const ulEl = document.querySelector('#palette-list');
    ulEl.innerHTML = '';
    addPalette(newPalette);
    getPalettes().forEach(obj => ulEl.append(createCard()))
    event.target.reset();
 };

const main = () => {
    console.log(getPalettes())
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
};

main();

