import getOneUser from '../../../../../../shared/api/get-one-user';
import User from './User';

const userRoute = {
    element: <User />,
    loader: getOneUser,
};

export default userRoute;
