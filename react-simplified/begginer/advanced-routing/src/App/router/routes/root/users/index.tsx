import getAllUsers from '../../../../../shared/api/get-all-users';
import Users from './Users';

const usersRoute = {
    element: <Users />,
    loader: getAllUsers,
};

export default usersRoute;
