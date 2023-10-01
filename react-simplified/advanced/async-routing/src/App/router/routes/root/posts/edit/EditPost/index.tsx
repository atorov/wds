import { useLoaderData } from 'react-router-dom';
import getAllUsers from '../../../../../../../shared/api/get-all-users';
import getOnePost from '../../../../../../../shared/api/get-one-post';
import PostEditor from '../../../../../../../shared/components/PostEditor';

function EditPost() {
    const {
        post: { data: post },
        users: { data: users },
    } = useLoaderData() as {
        post: Awaited<ReturnType<typeof getOnePost>>;
        users: Awaited<ReturnType<typeof getAllUsers>>;
    };

    return <PostEditor post={post} users={users} />;
}

export default EditPost;
