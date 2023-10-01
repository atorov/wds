import { useLoaderData } from 'react-router-dom';
import getAllUsers from '../../../../../../../shared/api/get-all-users';
import PostEditor from '../../../../../../../shared/components/PostEditor';

function NewPost() {
    const { data: users } = useLoaderData() as Awaited<
        ReturnType<typeof getAllUsers>
    >;

    return <PostEditor users={users} />;
}

export default NewPost;
