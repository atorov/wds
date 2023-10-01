import { defer, type LoaderFunctionArgs } from 'react-router-dom';
import getAllUsers from '../../../../../shared/api/get-all-users';
import getManyPosts from '../../../../../shared/api/get-many-posts';
import PostsWrapper from './PostsWrapper';

const postsRoute = {
    element: <PostsWrapper />,
    loader: async (args: LoaderFunctionArgs) => {
        const searchParams = new URL(args.request.url).searchParams;
        const query = searchParams.get('query');
        const userId = searchParams.get('userId');
        const postsPromise = getManyPosts(args);
        const usersPromise = getAllUsers(args);
        return defer({
            postsPromise,
            usersPromise,
            searchParams: { query, userId },
        });
    },
    action: getManyPosts,
};

export default postsRoute;
