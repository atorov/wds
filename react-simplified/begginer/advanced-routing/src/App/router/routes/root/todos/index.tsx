import getAllTodos from '../../../../../shared/api/get-all-todos';
import TodosWrapper from './TodosWrapper';

const postsRoute = {
    element: <TodosWrapper />,
    loader: getAllTodos,
};

export default postsRoute;
