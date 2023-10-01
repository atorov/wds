import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import getAllTodos from '../../../../../../shared/api/get-all-todos';
import Skeleton from '../../../../../../shared/components/Skeleton';
import SkeletonList from '../../../../../../shared/components/SkeletonList';
import Todos from '../../../../../../shared/components/Todos';

function TodosWrapper() {
    const { todosPromise } = useLoaderData() as {
        todosPromise: ReturnType<typeof defer>;
    };

    return (
        <div className="container">
            <h1 className="page-title">Todos</h1>
            <Suspense
                fallback={
                    <SkeletonList itemsNum={10}>
                        <li>
                            <Skeleton isShort />
                        </li>
                    </SkeletonList>
                }
            >
                <Await resolve={todosPromise}>
                    {({
                        data: todos,
                    }: Awaited<ReturnType<typeof getAllTodos>>) => (
                        <Todos todos={todos} />
                    )}
                </Await>
            </Suspense>
        </div>
    );
}

export default TodosWrapper;
