import type { LoaderFunctionArgs } from 'react-router-dom';
import api from '..';
import type { TPostItem } from '../../types/api';
import delay from '../../utils/delay';

async function getAllPosts({ request: { signal } }: LoaderFunctionArgs) {
    await delay();
    return api.get<TPostItem[]>('posts', {
        signal,
    });
}

export default getAllPosts;
