import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import getAllUsers from '../../../../../../shared/api/get-all-users';
import Skeleton from '../../../../../../shared/components/Skeleton';
import SkeletonButton from '../../../../../../shared/components/SkeletonButton';
import SkeletonList from '../../../../../../shared/components/SkeletonList';
import UserItem from './UserItem';

function Users() {
    const { usersPromise } = useLoaderData() as {
        usersPromise: ReturnType<typeof defer>;
    };

    return (
        <div className="container">
            <h1 className="page-title">Users</h1>
            <div className="card-grid">
                <Suspense
                    fallback={
                        <SkeletonList itemsNum={6}>
                            <div className="card">
                                <div className="card-header">
                                    <Skeleton isShort />
                                </div>
                                <div className="card-body">
                                    <Skeleton isShort />
                                    <Skeleton isShort />
                                    <Skeleton isShort />
                                </div>
                                <div className="card-footer">
                                    <SkeletonButton />
                                </div>
                            </div>
                        </SkeletonList>
                    }
                >
                    <Await resolve={usersPromise}>
                        {({
                            data: users,
                        }: Awaited<ReturnType<typeof getAllUsers>>) =>
                            users.map((user) => (
                                <UserItem key={user.id} user={user} />
                            ))
                        }
                    </Await>
                </Suspense>
            </div>
        </div>
    );
}

export default Users;
