import {useState} from "react";

export function useToggle(initState = false) {
    const [flag, setFlag] = useState(initState);

    const toggle = flag => setFlag(s => (typeof flag === 'boolean') ? flag : !s);
    const setTrue = () => setFlag(true);
    const setFalse = () => setFlag(false);

    return [
        flag,
        toggle,
        setTrue,
        setFalse,
    ];
}
