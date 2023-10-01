import { TPostItem } from '../../types/api/index.tsx';
import PostItem from './PostItem';

type Props = {
    posts: TPostItem[];
};

function Posts({ posts }: Props) {
    return (
        <>
            <h1 className="page-title">Posts</h1>
            <div className="card-grid">
                {posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}

export default Posts;
