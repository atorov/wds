import { Navigate, createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../../shared/components/ErrorPage';
import rootRoute from './routes/root';
import postsRoute from './routes/root/posts';
import postRoute from './routes/root/posts/[id]';
import todosRoute from './routes/root/todos';
import usersRoute from './routes/root/users';
import userRoute from './routes/root/users/[id]';

// API:
// ---
// GET /posts - Returns all of the posts
// GET /posts/:id - Returns a single post
// GET /posts/:id/comments - Returns all of the comments for a single post
// GET /users - Returns all of the users
// GET /users/:id - Returns a single user
// GET /posts?userId=<userId> - Returns all of the posts for a single user
// GET /todos - Returns all of the todos
// GET /todos?userId=<userId> - Returns all of the todos for a single user

const router = createBrowserRouter([
    {
        path: '/',
        ...rootRoute,
        children: [
            {
                children: [
                    { index: true, element: <Navigate to="/posts" /> },
                    {
                        path: 'posts',
                        children: [
                            { index: true, ...postsRoute },
                            {
                                path: ':id',
                                ...postRoute,
                            },
                        ],
                    },
                    {
                        path: 'users',
                        children: [
                            { index: true, ...usersRoute },
                            {
                                path: ':id',
                                ...userRoute,
                            },
                        ],
                    },
                    {
                        path: 'todos',
                        children: [
                            {
                                index: true,
                                ...todosRoute,
                            },
                        ],
                    },
                    { path: '*', element: <h1>404</h1> },
                ],
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

export default router;
