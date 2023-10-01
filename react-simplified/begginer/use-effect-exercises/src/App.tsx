import { useState } from 'react';
import { Child } from './Child';
import Users from './Users';

export default function App() {
    const [show, setShow] = useState(true);

    return (
        <div>
            <button onClick={() => setShow((currentShow) => !currentShow)}>
                Show/Hide
            </button>
            {show ? <Child /> : null}
            <hr />

            <Child />
            <hr />

            <Users />
        </div>
    );
}
