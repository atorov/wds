import type { LoaderFunctionArgs } from 'react-router-dom';
import api from '..';
import type { TPostItemX } from '../../types/api';
import delay from '../../utils/delay';

async function getOnePost({
    params: { id },
    request: { signal },
}: LoaderFunctionArgs) {
    await delay();
    return api.get<TPostItemX>(`posts/${id}?_embed=comments&_expand=user`, {
        signal,
    });
}

export default getOnePost;
