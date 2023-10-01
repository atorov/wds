import { useReducer } from 'react';

type State = {
    age?: number;
    name?: string;
};

function CounterWithName() {
    const [{ age, name }, dispatch] = useReducer(
        (state: State, payload: Partial<State>) => ({
            ...state,
            ...payload,
        }),
        {}
    );
    return (
        <div>
            <label htmlFor="name">Name:</label>&nbsp;
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(ev) => {
                    dispatch({ name: ev.target.value });
                }}
            />
            <br />
            <br />
            <label>Age: </label>&nbsp;
            <button
                type="button"
                disabled={!age}
                onClick={() => {
                    dispatch({ age: (age ?? 0) - 1 });
                }}
            >
                -
            </button>
            &nbsp;{age ?? '--'}&nbsp;
            <button
                type="button"
                disabled={age !== undefined && age > 99}
                onClick={() => {
                    dispatch({ age: (age ?? 0) + 1 });
                }}
            >
                +
            </button>
            <hr />
            <p>
                My name is&nbsp;
                <em>{name ?? '--'}</em>
                &nbsp;and I am&nbsp;
                <em>{age ?? '--'}</em>
                &nbsp;years old.
            </p>
        </div>
    );
}

export default CounterWithName;
