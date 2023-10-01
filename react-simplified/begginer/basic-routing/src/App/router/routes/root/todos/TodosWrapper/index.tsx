import { useLoaderData } from 'react-router-dom';
import getAllTodos from '../../../../../../shared/api/get-all-todos.ts/index.ts';
import Todos from '../../../../../../shared/components/Todos/index.tsx';

function TodosWrapper() {
    const { data: todos } = useLoaderData() as Awaited<
        ReturnType<typeof getAllTodos>
    >;

    return (
        <div className="container">
            <Todos todos={todos} />
        </div>
    );
}

export default TodosWrapper;
