import { redirect, type ActionFunctionArgs } from 'react-router-dom';
import api from '..';
import type { TNewPostItem } from '../../types/api';
import delay from '../../utils/delay';

async function postOnePOst({ request }: ActionFunctionArgs) {
    await delay();

    const formData = await request.formData();
    const data: TNewPostItem = {
        title: formData.get('title') as TNewPostItem['title'],
        body: formData.get('body') as TNewPostItem['body'],
        userId: Number(formData.get('userId')) as TNewPostItem['userId'],
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

    await api.post('http://localhost:3000/posts', data, {
        signal: request.signal,
    });

    return redirect('/posts');
}

export default postOnePOst;
