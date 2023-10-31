import './style.css';
import { v4 as uuidv4 } from 'uuid';
import palettes from './palettes.json'

const defaultPalettes = palettes;

console.log('Hello!', uuidv4());

const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageValue = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch(err) {
        console.error(err);
        return null;
    }
};

const getPalettes = () => {
    getLocalStorageValue('palettes') || [];
};

const setPalettes = (newPalettes) => {
    setLocalStorageKey('palettes', newPalettes);
};

const initPalettesIfEmpty = () => {
    if (!getPalettes().length) setPalettes(defaultPalettes);
};

const addPalette = (newPalette) => {
    setPalettes([newPalette, ...getPalettes()]);
};

const removePalette = (uuid) => {
    setPalettes(getPalettes().filter(palette => palette.uuid !== uuid))
};
