import type { LoaderFunctionArgs } from 'react-router-dom';
import api from '..';
import type { TUserItem } from '../../types/api';
import delay from '../../utils/delay';

async function getAllUsers({ request: { signal } }: LoaderFunctionArgs) {
    await delay();
    return api.get<TUserItem[]>('users', {
        signal,
    });
}

export default getAllUsers;
