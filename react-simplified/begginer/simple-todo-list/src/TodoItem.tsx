import type { Dispatch, SetStateAction } from 'react';
import type { Item } from './App';

type Props = {
    item: Item;
    setItems: Dispatch<SetStateAction<Item[]>>;
};
function TodoItem({ item: { id, checked, name }, setItems }: Props) {
    return (
        <li className="list-item">
            <label className="list-item-label">
                <input
                    type="checkbox"
                    checked={checked}
                    data-list-item-checkbox
                    onChange={(event) => {
                        setItems((prev) =>
                            prev.map((it) =>
                                it.id === id
                                    ? { ...it, checked: event.target.checked }
                                    : it
                            )
                        );
                    }}
                />
                <span data-list-item-text>{name}</span>
            </label>
            <button
                data-button-delete
                onClick={() => {
                    setItems((prev) => prev.filter((it) => it.id !== id));
                }}
            >
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
