import { useLoaderData } from 'react-router-dom';
import getAllUsers from '../../../../../../shared/api/get-all-users';
import UserItem from './UserItem';

function Users() {
    const { data: users } = useLoaderData() as Awaited<
        ReturnType<typeof getAllUsers>
    >;

    return (
        <div className="container">
            <h1 className="page-title">Users</h1>
            <div className="card-grid">
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default Users;
