import { Fragment, useEffect, useState } from 'react';

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

const URL = 'http://jsonplaceholder.typicode.com/users';

function Users() {
    const [users, setUsers] = useState<User[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Response | null>(null);
    console.log('🚀 TODO: ~ file: Users.tsx:34 ~ Users ~ error:', error);

    useEffect(() => {
        setError(null);
        setLoading(true);

        const controller = new AbortController();
        fetch(URL, { signal: controller.signal })
            .then((res) => {
                if (res.ok && res.status === 200) return res.json();
                return Promise.reject(res);
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((reason) => {
                // if (reason?.name === 'AbortController') return;
                if (reason instanceof DOMException) return;
                setError(reason);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {!loading && !error ? (
                <button
                    type="button"
                    onClick={() => {
                        setUsers((prev) => [
                            {
                                id: Math.random(),
                                address: {
                                    city: 'string',
                                    geo: {
                                        lat: 'string',
                                        lng: 'string',
                                    },
                                    street: 'string',
                                    suite: 'string',
                                    zipcode: 'string',
                                },
                                company: {
                                    bs: 'string',
                                    catchPhrase: 'string',
                                    name: 'string',
                                },
                                email: 'string',
                                name: 'string',
                                phone: 'string',
                                username: 'string',
                                website: 'string',
                            },
                            ...(prev ?? []),
                        ]);
                    }}
                >
                    Add new
                </button>
            ) : null}
            <hr />
            {error ? error.statusText : null}
            {loading
                ? 'Loading...'
                : users?.map((u) => (
                      <Fragment key={u.id}>
                          <input type="text" />
                          <ul>
                              <li>id: {u.id}</li>
                              <li>
                                  <strong>address:</strong>
                                  <ul>
                                      <li>city: {u.address.city}</li>
                                      <li>
                                          <strong>geo:</strong>
                                          <ul>
                                              <li>lat: {u.address.geo.lat}</li>
                                              <li>lng: {u.address.geo.lng}</li>
                                          </ul>
                                      </li>
                                      <li>street: {u.address.street}</li>
                                      <li>suite: {u.address.suite}</li>
                                      <li>zipcode: {u.address.zipcode}</li>
                                  </ul>
                              </li>

                              <li>
                                  <strong>company:</strong>
                                  <ul>
                                      <li>bs: {u.company.bs}</li>
                                      <li>
                                          catchPhrase: {u.company.catchPhrase}
                                      </li>
                                      <li>name: {u.company.name}</li>
                                  </ul>
                              </li>
                              <li>email: {u.email}</li>
                              <li>name: {u.name}</li>
                              <li>phone: {u.phone}</li>
                              <li>username: {u.username}</li>
                              <li>website: {u.website}</li>
                              <hr />
                          </ul>
                      </Fragment>
                  ))}
        </div>
    );
}

export default Users;
