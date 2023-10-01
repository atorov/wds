import { useCallback, useState } from 'react';

export default function useArray<T>(initVal: T[] | (() => T[]) = []) {
    const [array, setArray] = useState(initVal);

    const push = useCallback((el: T) => {
        setArray((prev) => [...prev, el]);
    }, []);

    const replace = useCallback((index: number, el: T) => {
        setArray((prev) => {
            if (index >= prev.length) return prev;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return prev.with(index, el);
        });
    }, []);

    const filter = useCallback((cb: Parameters<Array<T>['filter']>['0']) => {
        setArray((prev) => prev.filter(cb));
    }, []);

    const remove = useCallback((index: number) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setArray((prev) => prev.toSpliced(index, 1));
    }, []);

    const clear = useCallback(() => {
        setArray([]);
    }, []);

    const reset = useCallback(() => {
        setArray(initVal);
    }, [initVal]);

    return {
        array,
        set: setArray,
        push,
        replace,
        filter,
        remove,
        clear,
        reset,
    };
}
