import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    isComplete?: boolean;
};

export default function TodoListItem({
    children = null,
    isComplete = false,
}: Props) {
    return (
        <div>
            <input
                type="checkbox"
                name="isComplete"
                id="is-complete"
                defaultChecked={isComplete}
                disabled
            />
            <label htmlFor="is-complete">
                Is&nbsp;{!isComplete ? 'not ' : null}completed&nbsp; ({children}
                )
            </label>
        </div>
    );
}
