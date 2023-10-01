import { useEffect, useState, type Dispatch } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useLocalStorage(key: string, init: any) {
    console.log('---');

    const [value, setValue] = useState(() => {
        let storedValue: string | null = null;
        try {
            const item = localStorage.getItem(key);
            if (item !== null) {
                storedValue = JSON.parse(item);
            }
        } catch (error) {
            console.error('~ error:', error);
        }
        if (storedValue !== null) {
            return storedValue;
        }
        if (typeof init === 'function') {
            return init();
        }
        return init;
    });

    // hydrate
    useEffect(() => {
        try {
            if (value === undefined) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            console.error('~ error:', error);
        }
    }, [key, value]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return [value, setValue] as [any, Dispatch<any>];
}

localStorage;
