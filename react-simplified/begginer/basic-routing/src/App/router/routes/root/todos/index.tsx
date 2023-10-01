import getAllTodos from '../../../../../shared/api/get-all-todos.ts';
import TodosWrapper from './TodosWrapper/index.tsx';

const postsRoute = {
    element: <TodosWrapper />,
    loader: getAllTodos,
};

export default postsRoute;
