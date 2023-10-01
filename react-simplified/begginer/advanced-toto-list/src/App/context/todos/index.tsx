import { useEffect, useReducer, type ReactNode } from 'react';
import Context from './Context';
import INIT_DATA from './init-data';
import reducer from './reducer';

type Props = {
    children: ReactNode;
};

export default function Provider({ children }: Props) {
    const [data, dispatch] = useReducer(reducer, INIT_DATA);

    useEffect(() => {
        console.log('TODO: saving to local storage...');
        try {
            localStorage.setItem('todos', JSON.stringify(data));
        } catch (error) {
            console.warn('Warning: Could not save data!');
        }
    }, [data]);

    return (
        <Context.Provider value={{ data, dispatch }}>
            {children}
        </Context.Provider>
    );
}
