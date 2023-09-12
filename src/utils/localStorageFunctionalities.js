const getDatafromStorage = () => {
    const localData = localStorage.getItem('cart');
    if(localData){
        return JSON.parse(localData);
    }
    return [];
}

const addDataToStorage = (id) => {
    const localData = getDatafromStorage();
    localData.push(id);
    localStorage.setItem('cart',JSON.stringify(localData));
}

const removeDataFromStorage = (id) => {
    const localData = getDatafromStorage();
    const dataAfterRemove = localData.filter( data => data !== id );
    localStorage.setItem('cart',JSON.stringify(dataAfterRemove));
}

export { getDatafromStorage, addDataToStorage, removeDataFromStorage }