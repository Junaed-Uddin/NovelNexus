
const getDataFromLocalStorage = (keyName) => {
    const data = localStorage.getItem(keyName);
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

const saveIdByLocalStorage = (id, keyName) => {
    const storedBookId = getDataFromLocalStorage(keyName);
    const exists = storedBookId.find(existId => existId === id);
    if (!exists) {
        storedBookId.push(id);
        localStorage.setItem(keyName, JSON.stringify(storedBookId));
    }
}

export { getDataFromLocalStorage, saveIdByLocalStorage }