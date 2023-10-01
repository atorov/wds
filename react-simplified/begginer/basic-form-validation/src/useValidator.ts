import { RefObject, useEffect, useState } from 'react';
import './App.css';

export default function useValidator<
    T extends HTMLElement,
    K extends keyof HTMLElementEventMap
>(ref: RefObject<T>, types: K[], validator: () => string) {
    const [error, setError] = useState('');

    useEffect(() => {
        const el = ref.current;

        function validateFn(this: T) {
            setError(validator.bind(this)());
        }

        types.forEach((type) => {
            el?.addEventListener(type, validateFn);
        });
        return () => {
            types.forEach((type) => {
                el?.removeEventListener(type, validateFn);
            });
        };
    }, [ref, types, validator]);

    return { error, setError };
}
