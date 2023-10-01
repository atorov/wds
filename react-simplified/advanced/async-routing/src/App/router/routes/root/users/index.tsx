import { defer, type LoaderFunctionArgs } from 'react-router-dom';
import getAllUsers from '../../../../../shared/api/get-all-users';
import Users from './Users';

const usersRoute = {
    element: <Users />,
    loader: (args: LoaderFunctionArgs) =>
        defer({ usersPromise: getAllUsers(args) }),
};

export default usersRoute;
