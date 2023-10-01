import { useEffect, useState } from 'react';

export function Child() {
    const [age, setAge] = useState(0);
    const [name, setName] = useState('');

    console.log('Re-Render');

    useEffect(() => {
        console.log('Hi!');
    }, []);

    useEffect(() => {
        console.log(`My name is ${name} and I am ${age} years old`);
    }, [age, name]);

    useEffect(() => {
        document.title = name;
        return () => {
            document.title = '';
        };
    }, [name]);

    useEffect(
        () => () => {
            console.log('Bye!');
        },
        []
    );

    useEffect(() => {
        const t = setTimeout(() => {
            console.log(`::: My name is ${name}`);
        }, 1000);
        return () => {
            clearTimeout(t);
        };
    }, [name]);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(ev) => {
                    setName(ev.target.value);
                }}
            />
            <br />
            <br />
            <button onClick={() => setAge((a) => a - 1)}>-</button>
            {age}
            <button onClick={() => setAge((a) => a + 1)}>+</button>
            <br />
            <br />
            My name is {name} and I am {age} years old.
        </div>
    );
}
