import { type LoaderFunctionArgs } from 'react-router-dom';
import getAllUsers from '../../../../../shared/api/get-all-users';
import getManyPosts from '../../../../../shared/api/get-many-posts';
import PostsWrapper from './PostsWrapper';

const postsRoute = {
    element: <PostsWrapper />,
    loader: async (arg: LoaderFunctionArgs) => {
        const searchParams = new URL(arg.request.url).searchParams;
        const query = searchParams.get('query');
        const userId = searchParams.get('userId');
        const postsPr = getManyPosts(arg);
        const usersPr = getAllUsers(arg);
        return {
            posts: await postsPr,
            users: await usersPr,
            searchParams: { query, userId },
        };
    },
    action: getManyPosts,
};

export default postsRoute;
