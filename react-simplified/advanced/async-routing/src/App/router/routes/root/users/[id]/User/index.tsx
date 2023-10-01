import { useLoaderData } from 'react-router-dom';
import getOneUser from '../../../../../../../shared/api/get-one-user';
import Posts from '../../../../../../../shared/components/Posts';
import Todos from '../../../../../../../shared/components/Todos';

function User() {
    const { data: user } = useLoaderData() as Awaited<
        ReturnType<typeof getOneUser>
    >;

    return (
        <div className="container">
            <h1 className="page-title">{user.name}</h1>
            <div className="page-subtitle">{user.email}</div>
            <div>
                <b>Company:</b>&nbsp;{user.company.name}
            </div>
            <div>
                <b>Website:</b>&nbsp;{user.website}
            </div>
            <div>
                <b>Address:</b>&nbsp;{user.address.street}&nbsp;
                {user.address.suite},&nbsp;{user.address.city},&nbsp;
                {user.address.zipcode}
            </div>
            <h3 className="mt-4 mb-2">Posts</h3>
            <Posts posts={user.posts} />
            <h3 className="mt-4 mb-2">Todos</h3>
            <Todos todos={user.todos} />
        </div>
    );
}

export default User;
