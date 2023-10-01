import { Suspense, useEffect, useRef } from 'react';
import { Await, Form, Link, defer, useLoaderData } from 'react-router-dom';
import getAllUsers from '../../../../../../shared/api/get-all-users';
import getManyPosts from '../../../../../../shared/api/get-many-posts';
import Posts from '../../../../../../shared/components/Posts';
import Skeleton from '../../../../../../shared/components/Skeleton';
import SkeletonList from '../../../../../../shared/components/SkeletonList';
import UserSelector from '../../../../../../shared/components/UserSelector';

function PostsWrapper() {
    const {
        postsPromise,
        usersPromise,
        searchParams: { query, userId },
    } = useLoaderData() as {
        postsPromise: ReturnType<typeof defer>;
        usersPromise: ReturnType<typeof defer>;
        searchParams: { query?: string; userId?: string };
    };

    const queryRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (queryRef.current) {
            queryRef.current.value = query ?? '';
        }
    }, [query]);

    return (
        <div className="container">
            <h1 className="page-title">
                Posts
                <div className="title-btns">
                    <Link to="new" className="btn btn-outline">
                        New
                    </Link>
                </div>
            </h1>
            <Form method="get" action="/posts" className="form mb-4">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="query">Query</label>
                        <input
                            ref={queryRef}
                            id="query"
                            name="query"
                            type="search"
                            // defaultValue={query}
                        />
                    </div>
                    <Suspense>
                        <Await resolve={usersPromise}>
                            {({
                                data: users,
                            }: Awaited<ReturnType<typeof getAllUsers>>) => (
                                <UserSelector
                                    users={users}
                                    defaultValue={userId}
                                />
                            )}
                        </Await>
                    </Suspense>
                    <button className="btn">Filter</button>
                </div>
            </Form>
            <Suspense
                fallback={
                    <SkeletonList itemsNum={5}>
                        <Skeleton />
                    </SkeletonList>
                }
            >
                <Await resolve={postsPromise}>
                    {({
                        data: posts,
                    }: Awaited<ReturnType<typeof getManyPosts>>) => (
                        <Posts posts={posts} />
                    )}
                </Await>
            </Suspense>
        </div>
    );
}

export default PostsWrapper;
