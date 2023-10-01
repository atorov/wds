import getAllUsers from '../../../../../../shared/api/get-all-users';
import postOnePost from '../../../../../../shared/api/post-one-post';
import NewPost from './NewPost';

const newPostRoute = {
    element: <NewPost />,
    loader: getAllUsers,
    action: postOnePost,
};

export default newPostRoute;
