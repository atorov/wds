import { useEffect, useState } from 'react';
import type { Options } from './App';

export default function useFetch(url: string, options?: Options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState([] as Record<string, any>[]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        const ctrl = new AbortController();
        fetch(url, { ...options, signal: ctrl.signal })
            .then((res) => {
                if (!res.ok) {
                    throw res;
                }
                return res.json();
            })
            .then(setData)
            .catch((error) => {
                // setData([]);
                if (error.name === 'AbortError') return;
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });

        return () => {
            return ctrl.abort();
        };
    }, [options, url]);

    return { data, isLoading, isError };
}
