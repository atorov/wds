import type { Dispatch, SetStateAction } from 'react';
import type { Item } from './App';
import TodoItem from './TodoItem';

type Props = {
    items: Item[];
    setItems: Dispatch<SetStateAction<Item[]>>;
};

function TodoList({ items, setItems }: Props) {
    return (
        <ul id="list">
            {items.map((it) => (
                <TodoItem key={it.id} item={it} setItems={setItems} />
            ))}
        </ul>
    );
}

export default TodoList;
