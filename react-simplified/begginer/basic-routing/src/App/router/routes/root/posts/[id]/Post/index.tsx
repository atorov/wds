import { Link, useLoaderData } from 'react-router-dom';
import getOnePost from '../../../../../../../shared/api/get-one-post.ts';
import Comments from './Comments/index.tsx';

function Post() {
    const { data: post } = useLoaderData() as Awaited<
        ReturnType<typeof getOnePost>
    >;

    return (
        <div className="container">
            <h1 className="page-title">{post.title}</h1>
            <span className="page-subtitle">
                By: <Link to={`/users/${post.user.id}`}>{post.user.name}</Link>
            </span>
            <div>{post.body}</div>
            <Comments comments={post.comments} />
        </div>
    );
}

export default Post;
