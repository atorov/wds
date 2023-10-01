import { useState } from 'react';
import AddNew from './AddNew';
import './App.css';
import TodoList from './TodoList';

export type Item = {
    id: string;
    name: string;
    checked: boolean;
};

function App() {
    const [items, setItems] = useState<Item[]>([]);

    return (
        <>
            <TodoList items={items} setItems={setItems} />
            <AddNew setItems={setItems} />
        </>
    );
}

export default App;
