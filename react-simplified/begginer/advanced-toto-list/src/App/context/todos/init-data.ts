import type { Data } from './types';

let localData = null;
try {
    console.log('TODO: loading from local storage...');
    localData = JSON.parse(localStorage.getItem('todos') ?? '') as Data;
} catch (error) {
    console.warn('Warning: Could not read local storage data!');
}

const INIT_DATA: Data = localData ?? {
    filterTerm: '',
    hideCompleted: false,
    items: [],
    selectedItem: '',
};

export default INIT_DATA;
