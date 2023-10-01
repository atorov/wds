import { Form, Link, useActionData, useNavigation } from 'react-router-dom';
import type { TPostItem, TUserItem } from '../../types/api';
import UserSelector from '../UserSelector';

type Props = {
    users: TUserItem[];
    post?: TPostItem;
};

function PostEditor({ users, post }: Props) {
    const { state } = useNavigation();
    const isSubmitting = state === 'submitting';

    const error = useActionData() as
        | {
              value: keyof TPostItem;
              message: string;
          }
        | undefined;

    const isEditor = post;

    const title = isEditor ? 'Edit Post' : 'New Post';
    const method = isEditor ? 'PUT' : 'POST';
    const action = isEditor ? `/posts/${post!.id}/edit` : '/posts/new';

    return (
        <div className="container">
            <h1 className="page-title">{title}</h1>
            <Form method={method} action={action} className="form">
                <input
                    name="id"
                    defaultValue={post?.id}
                    style={{ display: 'none' }}
                />
                <div className="form-row">
                    <div
                        className={`form-group ${
                            error?.value === 'title' ? 'error' : ''
                        }`}
                    >
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            defaultValue={post?.title}
                        />
                        <div
                            className={
                                error?.value === 'title' ? 'error-message' : ''
                            }
                        >
                            {error?.value === 'title' ? error.message : ''}
                        </div>
                    </div>
                    <UserSelector
                        users={users}
                        defaultValue={String(post?.userId)}
                        isOptionAnyEnabled={false}
                    />
                </div>
                <div className="form-row">
                    <div
                        className={`form-group ${
                            error?.value === 'body' ? 'error' : ''
                        }`}
                    >
                        <label htmlFor="body">Body</label>
                        <textarea
                            id="body"
                            name="body"
                            defaultValue={post?.body}
                        />
                        <div
                            className={
                                error?.value === 'body' ? 'error-message' : ''
                            }
                        >
                            {error?.value === 'body' ? error.message : ''}
                        </div>
                    </div>
                </div>
                <div className="form-row form-btn-row">
                    <Link to=".." className="btn btn-outline">
                        Cancel
                    </Link>
                    <button disabled={isSubmitting} className="btn">
                        Save
                    </button>
                </div>
            </Form>
        </div>
    );
}

export default PostEditor;
