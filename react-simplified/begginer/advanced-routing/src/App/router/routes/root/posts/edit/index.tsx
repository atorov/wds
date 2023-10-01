import { type LoaderFunctionArgs } from 'react-router-dom';
import getAllUsers from '../../../../../../shared/api/get-all-users';
import getOnePost from '../../../../../../shared/api/get-one-post';
import putOnePost from '../../../../../../shared/api/put-one-post';
import EditPost from './EditPost';

const editPostRoute = {
    element: <EditPost />,
    loader: async (arg: LoaderFunctionArgs) => {
        const postPr = getOnePost(arg);
        const usersPr = getAllUsers(arg);
        return { post: await postPr, users: await usersPr };
    },
    action: putOnePost,
};

export default editPostRoute;
