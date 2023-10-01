import { redirect, type ActionFunctionArgs } from 'react-router-dom';
import api from '..';
import type { TPostItem } from '../../types/api';
import delay from '../../utils/delay';

async function putOnePOst({ params, request }: ActionFunctionArgs) {
    await delay();

    const formData = await request.formData();
    const data: TPostItem = {
        // id: Number(formData.get('id')) as TPostItem['id'],
        id: Number(params.id),
        title: formData.get('title') as TPostItem['title'],
        body: formData.get('body') as TPostItem['body'],
        userId: Number(formData.get('userId')) as TPostItem['userId'],
    };

    if (!data.title) {
        return { value: 'title', message: 'Required!' };
    }
    if (!data.userId) {
        return { value: 'userId', message: 'Required!' };
    }
    if (!data.body) {
        return { value: 'body', message: 'Required!' };
    }

    await api.put(`posts/${data.id}`, data, {
        signal: request.signal,
    });

    return redirect('/posts');
}

export default putOnePOst;
