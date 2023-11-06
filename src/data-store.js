import palettes from './palettes.json'
const deafultPalettes = [...palettes]

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

export const getPalettes = () => {
    return getLocalStorageValue('palettes') || initPalettesIfEmpty();
};

export const setPalettes = (newPalettes) => {
    setLocalStorageKey('palettes', newPalettes);
};

export const initPalettesIfEmpty = () => {
    setPalettes(defaultPalettes);
};

export const addPalette = (newPalette) => {
    setPalettes([newPalette, ...getPalettes()]);
};

export const removePalette = (uuid) => {
    setPalettes(getPalettes().filter(palette => palette.uuid !== uuid))
};
