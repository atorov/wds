import type { LoaderFunctionArgs } from 'react-router-dom';
import api from '..';
import type { TUserItemX } from '../../types/api';
import delay from '../../utils/delay';

async function getOneUser({
    params: { id },
    request: { signal },
}: LoaderFunctionArgs) {
    await delay();
    return api.get<TUserItemX>(`users/${id}?_embed=posts&_embed=todos`, {
        signal,
    });
}

export default getOneUser;
