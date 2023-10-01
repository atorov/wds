import getOnePost from '../../../../../../shared/api/get-one-post.ts';
import Post from './Post';

const postRoute = {
    element: <Post />,
    loader: getOnePost,
};

export default postRoute;
