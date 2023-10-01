import type { TTodoItem } from '../../../types/api';

type Props = {
    todo: TTodoItem;
};

function TodoItem({ todo }: Props) {
    return (
        <li className={todo.completed ? 'strike-through' : ''}>{todo.title}</li>
    );
}

export default TodoItem;
