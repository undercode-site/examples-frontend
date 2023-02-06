import {useEffect} from "react";

const bodyScrollBlockClassName = 'scroll-block';

function toggleBodyScrollBlock(flag) {
    document.body.classList.toggle(bodyScrollBlockClassName, flag);
}

export default function useBodyScrollBlock(dep) {
    useEffect(() => {
        toggleBodyScrollBlock(dep);
        return () => toggleBodyScrollBlock(false);
    }, [dep]);
}
