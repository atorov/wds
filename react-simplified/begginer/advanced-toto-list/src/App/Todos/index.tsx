import useTodosContext from '../context/todos/use-todos-context';
import Item from './Item';

export default function Todos() {
    const {
        data: { filterTerm, items, hideCompleted },
    } = useTodosContext();

    let todos = hideCompleted ? items.filter((it) => !it.checked) : items;
    todos = filterTerm
        ? todos.filter((it) => it.name.includes(filterTerm))
        : todos;

    return (
        <ul id="list">
            {todos.map((it) => (
                <Item key={it.id} item={it} />
            ))}
        </ul>
    );
}
