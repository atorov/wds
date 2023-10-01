import { useState, type Dispatch, type SetStateAction } from 'react';
import type { Item } from './App';

type Props = {
    setItems: Dispatch<SetStateAction<Item[]>>;
};

function AddNew({ setItems }: Props) {
    const [name, setName] = useState('');

    return (
        <div id="new-todo-form">
            <label htmlFor="todo-input">New Todo</label>
            <input
                id="todo-input"
                type="text"
                value={name}
                onChange={(ev) => {
                    setName(ev.target.value);
                }}
            />
            <button
                type="button"
                disabled={!name}
                onClick={() => {
                    setItems((prev) => [
                        {
                            id: crypto.randomUUID(),
                            name,
                            checked: false,
                        },
                        ...prev,
                    ]);
                    setName('');
                }}
            >
                Add Todo
            </button>
        </div>
    );
}

export default AddNew;
