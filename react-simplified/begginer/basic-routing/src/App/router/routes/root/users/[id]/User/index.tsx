import { useLoaderData } from 'react-router-dom';
import getOneUser from '../../../../../../../shared/api/get-one-user.ts';
import Posts from '../../../../../../../shared/components/Posts';
import Todos from '../../../../../../../shared/components/Todos';

export default function User() {
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
            <Posts posts={user.posts} />
            <Todos todos={user.todos} />
        </div>
    );
}
