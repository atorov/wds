import { useContext } from 'react';
import { Context } from './Provider';

function useToasts() {
    const value = useContext(Context);
    if (value === null) {
        throw new Error('::: Error: Must be used inside context!');
    }

    return value;
}

export default useToasts;
