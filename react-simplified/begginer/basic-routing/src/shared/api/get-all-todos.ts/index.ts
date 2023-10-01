import type { LoaderFunctionArgs } from 'react-router-dom';
import api from '..';
import type { TTodoItem } from '../../types/api';
import delay from '../../utils/delay';

async function getAllTodos({ request: { signal } }: LoaderFunctionArgs) {
    await delay();
    return api.get<TTodoItem[]>('todos', {
        signal,
    });
}

export default getAllTodos;
