import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError() as Error;
    console.error(error);

    return (
        <div className="container">
            <div style={{ color: 'red' }}>Dang!</div>
            {import.meta.env.DEV ? (
                <>
                    <h3>{error.name}</h3>
                    <p>{error.message}</p>
                    <p>
                        <em>{error.stack}</em>
                    </p>
                </>
            ) : null}
        </div>
    );
}

export default ErrorPage;
