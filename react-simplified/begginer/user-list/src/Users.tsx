import { useEffect, useRef, useState } from 'react';
import User from './User';

type Status = 'ready' | 'loading' | 'error';

type User = {
    id: number;
    address: {
        city: string;
        geo: {
            lat: string;
            lng: string;
        };
        street: string;
        suite: string;
        zipcode: string;
    };
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
};

const URL = 'https://jsonplaceholder.typicode.com/users';

function Users() {
    const [status, setStatus] = useState<Status>('ready');
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<Error | null>();

    const tsRef = useRef<number | null>(null);
    useEffect(() => {
        setStatus('loading');

        const ts = Date.now();
        tsRef.current = ts;
        const controller = new AbortController();
        setTimeout(() => {
            fetch(URL, { signal: controller.signal })
                .then((res) => {
                    if (res.ok) {
                        return res.json() as Promise<User[]>;
                    }
                    throw new Error(res.statusText || 'Unknown Error!');
                })
                .then((data) => {
                    if (ts === tsRef.current) {
                        setUsers(data);
                        setStatus('ready');
                    }
                })
                .catch((reason) => {
                    if (ts === tsRef.current && reason?.name !== 'AbortError') {
                        setStatus('error');
                        setError(reason);
                    }
                });
        }, Math.random() * 100 + 150);
        return () => {
            controller.abort();
        };
    }, []);

    return (
        <>
            <h1>User List</h1>
            {status === 'error' ? (
                <p>
                    <em>
                        Error: <strong>{error?.name}</strong>
                    </em>
                </p>
            ) : null}
            {status === 'loading' ? (
                <p>
                    <em>Loading...</em>
                </p>
            ) : null}
            <ul>
                {users.map(({ id, name }) => (
                    <User key={id} name={name} />
                ))}
            </ul>
        </>
    );
}

export default Users;
