import type { TCommentItem } from '../../../../../../../../shared/types/api';
import CommentItem from './CommentItem';

type Props = {
    comments: TCommentItem[];
};

function Comments({ comments }: Props) {
    return (
        <>
            <h3 className="mt-4 mb-2">Comments</h3>
            <div className="card-stack">
                {comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
        </>
    );
}

export default Comments;
