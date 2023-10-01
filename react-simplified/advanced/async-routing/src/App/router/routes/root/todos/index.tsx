import { defer, type LoaderFunctionArgs } from 'react-router-dom';
import getAllTodos from '../../../../../shared/api/get-all-todos';
import TodosWrapper from './TodosWrapper';

const postsRoute = {
    element: <TodosWrapper />,
    loader: (args: LoaderFunctionArgs) =>
        defer({ todosPromise: getAllTodos(args) }),
};

export default postsRoute;
