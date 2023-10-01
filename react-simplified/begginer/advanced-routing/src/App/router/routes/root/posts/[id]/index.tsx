import getOnePost from '../../../../../../shared/api/get-one-post';
import Post from './Post';

const postRoute = {
    element: <Post />,
    loader: getOnePost,
};

export default postRoute;
