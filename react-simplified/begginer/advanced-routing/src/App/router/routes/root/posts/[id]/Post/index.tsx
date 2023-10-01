import { Link, useLoaderData } from 'react-router-dom';
import getOnePost from '../../../../../../../shared/api/get-one-post';
import Comments from './Comments';

function Post() {
    const { data: post } = useLoaderData() as Awaited<
        ReturnType<typeof getOnePost>
    >;

    return (
        <div className="container">
            <h1 className="page-title">
                {post.title}
                <div className="title-btns">
                    <Link to="edit" className="btn btn-outline">
                        Edit
                    </Link>
                </div>
            </h1>
            <span className="page-subtitle">
                By: <Link to={`/users/${post.user.id}`}>{post.user.name}</Link>
            </span>
            <div>{post.body}</div>
            <Comments comments={post.comments} />
        </div>
    );
}

export default Post;
