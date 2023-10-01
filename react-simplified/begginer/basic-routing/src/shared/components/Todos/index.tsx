import { TTodoItem } from '../../types/api';
import TodoItem from './TodoItem';

type Props = {
    todos: TTodoItem[];
};

function Todos({ todos }: Props) {
    return (
        <>
            <h1 className="page-title">Todos</h1>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </>
    );
}

export default Todos;
