import { useEffect, useState } from "react";

const useLocalState = (defaultValue, key) => {
    const [val, setVal] = useState(() => {
        const localVal = window.localStorage.getItem(key);
        return localVal !== null ? JSON.parse(localVal) : defaultValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(val));
    }, [key, val]);

    return [val, setVal]; //return state just like useState
};

export { useLocalState };