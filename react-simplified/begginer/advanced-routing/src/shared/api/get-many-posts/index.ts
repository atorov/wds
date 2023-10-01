import type { LoaderFunctionArgs } from 'react-router-dom';
import api from '..';
import type { TPostItem } from '../../types/api';
import delay from '../../utils/delay';

async function getManyPosts({ request: { signal, url } }: LoaderFunctionArgs) {
    await delay();
    const searchParams = new URL(url).searchParams;

    // let searchParamsStr = '';
    // if (searchParams.size) {
    //     searchParamsStr = Array.from(searchParams.entries()).reduce(
    //         (acc, [key, val]) => {
    //             if (val) {
    //                 acc += `${key === 'query' ? 'q' : key}=${val}&`;
    //             }
    //             return acc;
    //         },
    //         '?'
    //     );
    // }
    // return api.get<TPostItem[]>(`posts${searchParamsStr}`, {
    //     signal,
    // });

    const params = searchParams.size
        ? {
              q: searchParams.get('query') || undefined,
              userId: searchParams.get('userId') || undefined,
          }
        : undefined;

    return api.get<TPostItem[]>('posts', {
        params,
        signal,
    });
}

export default getManyPosts;
