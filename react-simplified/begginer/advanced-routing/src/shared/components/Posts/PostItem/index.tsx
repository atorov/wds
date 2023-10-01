import { Link } from 'react-router-dom';
import type { TPostItem } from '../../../types/api';

type Props = {
    post: TPostItem;
};

function PostItem({ post }: Props) {
    return (
        <div className="card">
            <div className="card-header">{post.title}</div>
            <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
            </div>
            <div className="card-footer">
                <Link to={`/posts/${String(post.id)}`} className="btn">
                    View
                </Link>
            </div>
        </div>
    );
}

export default PostItem;
