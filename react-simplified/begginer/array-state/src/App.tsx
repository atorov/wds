import { useState } from 'react';

const INIT = ['A', 'B', 'C'];

function App() {
    const [array, setArray] = useState(INIT);

    const [char, setChar] = useState('');
    const [index, setIndex] = useState<number | null>(null);

    const isResetDisabled = INIT.reduce(
        (acc, it, idx) => acc && it === array[idx],
        INIT.length === array.length
    );

    return (
        <>
            <button
                type="button"
                disabled={!array.length}
                onClick={() => {
                    setArray((prev) => prev.slice(1));
                }}
            >
                Remove first element
            </button>
            <br />
            <button
                type="button"
                disabled={!array.length || !array.includes('B')}
                onClick={() => {
                    setArray((prev) => prev.filter((it) => it !== 'B'));
                }}
            >
                Remove letter 'B'
            </button>
            <br />
            <button
                type="button"
                disabled={array[0] === '>'}
                onClick={() => {
                    setArray((prev) => ['>', ...prev]);
                }}
            >
                Add character '&gt;' to start
            </button>
            <br />
            <button
                type="button"
                disabled={array.at(-1) === '<'}
                onClick={() => {
                    setArray((prev) => [...prev, '<']);
                }}
            >
                Add character '&lt;' to end
            </button>
            <br />
            <button
                type="button"
                disabled={!array.length}
                onClick={() => {
                    setArray([]);
                }}
            >
                Clear
            </button>
            <br />
            <button
                type="button"
                disabled={isResetDisabled}
                onClick={() => {
                    setArray(INIT);
                }}
            >
                Reset
            </button>
            <br />
            <button
                type="button"
                disabled={!array.includes('A')}
                onClick={() => {
                    setArray((prev) =>
                        prev.map((it) => (it === 'A' ? 'H' : it))
                    );
                }}
            >
                Update all 'A's to 'H's
            </button>
            <br />
            <input
                type="text"
                value={char}
                onChange={(event) => {
                    setChar(event.target.value.at(-1) ?? '');
                }}
            />
            <input
                type="number"
                value={index ?? ''}
                onChange={(event) => {
                    setIndex(
                        event.target.value ? Number(event.target.value) : null
                    );
                }}
            />
            <button
                type="button"
                disabled={!char || !Number.isInteger(index)}
                onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    setArray((prev) => prev.toSpliced(index, 0, [char]));
                    setChar('');
                    setIndex(0);
                }}
            >
                Add '{char}' at [{index}]
            </button>
            <br />
            <hr />[{array.join(', ')}]
        </>
    );
}

export default App;
