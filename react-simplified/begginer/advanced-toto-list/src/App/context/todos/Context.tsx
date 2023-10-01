import { createContext, type Dispatch } from 'react';
import INIT_DATA from './init-data';
import type { Action } from './reducer';

const Context = createContext({
    data: INIT_DATA,
    dispatch: (() => undefined) as Dispatch<Action>,
});
Context.displayName = 'TodoContext';

export default Context;
