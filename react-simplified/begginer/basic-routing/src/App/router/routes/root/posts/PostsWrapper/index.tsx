import { useLoaderData } from 'react-router-dom';
import getAllPosts from '../../../../../../shared/api/get-all-posts.ts/index.ts';
import Posts from '../../../../../../shared/components/Posts';

function PostsWrapper() {
    const { data: posts } = useLoaderData() as Awaited<
        ReturnType<typeof getAllPosts>
    >;

    return (
        <div className="container">
            <Posts posts={posts} />
        </div>
    );
}

export default PostsWrapper;
