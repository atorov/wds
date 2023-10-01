import { useRef, type MouseEventHandler } from 'react';
import type { TodoItem } from '../../context/todos/types';
import useTodosContext from '../../context/todos/use-todos-context';

type Props = {
    item: TodoItem;
};

export default function Item({ item }: Props) {
    const {
        data: { selectedItem },
        actions: { remove, toggle, setSelectedItem, updateSelectedItem },
    } = useTodosContext();

    const newNameRef = useRef<HTMLInputElement>(null);

    const handleSave: MouseEventHandler<HTMLButtonElement> = () => {
        if (newNameRef.current?.value) {
            updateSelectedItem({ id: item.id, name: newNameRef.current.value });
        }
    };

    const isSelectedItem = item.id === selectedItem;

    if (isSelectedItem) {
        return (
            <li className="list-item">
                <label className="list-item-label">
                    <input
                        ref={newNameRef}
                        type="text"
                        defaultValue={item.name}
                    />
                </label>
                <button type="button" data-button-edit onClick={handleSave}>
                    Save
                </button>
            </li>
        );
    }

    function handleToggle() {
        toggle(item.id);
    }

    function handleEdit() {
        setSelectedItem(item.id);
    }

    function handleRemove() {
        remove(item.id);
    }

    return (
        <li className="list-item">
            <label className="list-item-label">
                <input
                    type="checkbox"
                    checked={item.checked}
                    data-list-item-checkbox
                    onChange={handleToggle}
                />
                <span data-list-item-text>{item.name}</span>
            </label>
            <button type="button" data-button-edit onClick={handleEdit}>
                Edit
            </button>
            <button type="button" data-button-delete onClick={handleRemove}>
                Delete
            </button>
        </li>
    );
}
