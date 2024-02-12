const saveToLocalStorage = (task) => {
    
    let tasks = getlocalStorage();

    if(!tasks.includes(task)) {
        tasks.push(task);
    }

    localStorage.setItem("Tasks", JSON.stringify(tasks));

}

const getlocalStorage = () => {

    let localStorageData = localStorage.getItem("Tasks");

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

const removeFromLocalStorage = (task) => {
    // We're saving local storage data into favorites variable
    let tasks = getlocalStorage();

    // We're finding the Index of our parameter (digimon)
    let taskIndex = tasks.indexOf(task);

    // remove the name from the array using the .splice method
    favorites.splice(taskIndex, 1);

    // We set our new mutaded favorites array inside our local storage.
    localStorage.setItem("Favorites", JSON.stringify(tasks));

}

export {saveToLocalStorage, getlocalStorage, removeFromLocalStorage};