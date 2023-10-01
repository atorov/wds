import getOneUser from '../../../../../../shared/api/get-one-user.ts/index.ts';
import User from './User';

const userRoute = {
    element: <User />,
    loader: getOneUser,
};

export default userRoute;
