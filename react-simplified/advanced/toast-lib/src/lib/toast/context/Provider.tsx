import {
    createContext,
    useReducer,
    type Dispatch,
    type ReactNode,
} from 'react';
import type { ToastItem } from '../types';

const TOASTS: ToastItem[] = [
    { id: crypto.randomUUID(), align: 'top-left', body: 'Top Left' },
    { id: crypto.randomUUID(), align: 'top-center', body: 'Top Center' },
    {
        id: crypto.randomUUID(),
        align: 'top-right',
        body: 'I am a toast #1',
        autoDismiss: true,
    },
    {
        id: crypto.randomUUID(),
        align: 'top-right',
        body: 'I am a toast #2',
        autoDismiss: true,
        autoDismissTimeout: 3500,
    },
    {
        id: crypto.randomUUID(),
        align: 'top-right',
        body: 'I am a toast #3',
        autoDismissTimeout: 3500,
    },
    { id: crypto.randomUUID(), align: 'bottom-left', body: 'Bottom Left' },
    { id: crypto.randomUUID(), align: 'bottom-center', body: 'Bottom Center' },
    { id: crypto.randomUUID(), align: 'bottom-right', body: 'Bottom Right' },
];

type Actions =
    | {
          type: 'ADD';
          payload: Omit<ToastItem, 'id'>;
      }
    | {
          type: 'REMOVE';
          payload: ToastItem['id'];
      };

export const Context = createContext<[ToastItem[], Dispatch<Actions>] | null>(
    null
);

function Provider({ children }: { children: ReactNode }) {
    const value = useReducer(
        (state: ToastItem[], { type, payload }: Actions) => {
            switch (type) {
                case 'ADD':
                    return [...state, { ...payload, id: crypto.randomUUID() }];
                case 'REMOVE':
                    return state.filter((it) => it.id !== payload);
                default:
                    throw new Error('::: Error: Unhandled action type!');
                // return state;
            }
        },
        TOASTS
    );

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
