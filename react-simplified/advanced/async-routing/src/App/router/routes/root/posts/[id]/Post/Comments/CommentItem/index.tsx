import type { TCommentItem } from '../../../../../../../../../shared/types/api';

type Props = {
    comment: TCommentItem;
};

function CommentItem({ comment }: Props) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="text-sm mb-1">{comment.email}</div>
                <p>{comment.name}</p>
                <p>{comment.body}</p>
            </div>
        </div>
    );
}

export default CommentItem;
