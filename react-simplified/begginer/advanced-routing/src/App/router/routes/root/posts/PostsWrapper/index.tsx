import { useEffect, useRef } from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import getAllUsers from '../../../../../../shared/api/get-all-users';
import getManyPosts from '../../../../../../shared/api/get-many-posts';
import Posts from '../../../../../../shared/components/Posts';
import UserSelector from '../../../../../../shared/components/UserSelector';

function PostsWrapper() {
    const {
        posts: { data: posts },
        users: { data: users },
        searchParams: { query, userId },
    } = useLoaderData() as {
        posts: Awaited<ReturnType<typeof getManyPosts>>;
        users: Awaited<ReturnType<typeof getAllUsers>>;
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
                    <UserSelector users={users} defaultValue={userId} />
                    <button className="btn">Filter</button>
                </div>
            </Form>
            <Posts posts={posts} />
        </div>
    );
}

export default PostsWrapper;
