import {useState} from "react";

export function useArrayState(initArray = []) {
    const [array, setArray] = useState(initArray);

    const addItem = item => setArray(array => [...array, item]);

    const removeItem = item => setArray(array => array.filter(e => e !== item));

    const toggleItem = item => array.includes(item) ? removeItem(item) : addItem(item);

    return [
        array,
        setArray,
        addItem,
        removeItem,
        toggleItem,
    ];
}
