import type { TPostItem } from '../../types/api';
import PostItem from './PostItem';

type Props = {
    posts: TPostItem[];
};

function Posts({ posts }: Props) {
    return (
        <div className="card-grid">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {posts.toReversed().map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Posts;
