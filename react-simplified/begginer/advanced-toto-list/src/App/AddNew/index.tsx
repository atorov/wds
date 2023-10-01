import { useRef, type FormEvent } from 'react';
import useTodosContext from '../context/todos/use-todos-context';

export default function AddNew() {
    const {
        actions: { addNew },
    } = useTodosContext();

    const todoNameRef = useRef<HTMLInputElement>(null);

    function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        if (!todoNameRef.current?.value) return;
        addNew({
            id: crypto.randomUUID(),
            name: todoNameRef.current.value,
            checked: false,
        });
        todoNameRef.current.value = '';
    }

    return (
        <form id="new-todo-form" onSubmit={handleSubmit}>
            <label htmlFor="todo-input">New Todo</label>
            <input id="todo-input" ref={todoNameRef} type="text" />
            <button>Add Todo</button>
        </form>
    );
}
