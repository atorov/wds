import { useLoaderData } from 'react-router-dom';
import getAllTodos from '../../../../../../shared/api/get-all-todos';
import Todos from '../../../../../../shared/components/Todos';

function TodosWrapper() {
    const { data: todos } = useLoaderData() as Awaited<
        ReturnType<typeof getAllTodos>
    >;

    return (
        <div className="container">
            <h1 className="page-title">Todos</h1>
            <Todos todos={todos} />
        </div>
    );
}

export default TodosWrapper;
