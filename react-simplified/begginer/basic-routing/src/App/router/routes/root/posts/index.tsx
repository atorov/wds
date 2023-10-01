import getAllPosts from '../../../../../shared/api/get-all-posts.ts';
import PostsWrapper from './PostsWrapper/index.tsx';

const postsRoute = {
    element: <PostsWrapper />,
    loader: getAllPosts,
};

export default postsRoute;
