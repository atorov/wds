import { useLayoutEffect, useRef, useState } from 'react';
function App() {
    console.log('------------------------------------------------------------');
    const varRef = useRef(0);
    const cbRef = useRef(() => 0);
    const inputRef = useRef<HTMLInputElement>(null);

    const [count, setCount] = useState(0);

    console.log('🚀 TODO: ~ varRef:', varRef.current);
    console.log('🚀 TODO: ~ cbRef:', cbRef.current);
    console.log('🚀 TODO: ~ inputRef:', inputRef.current);
    console.log('🚀 TODO: ~ count:', count);

    useLayoutEffect(() => {
        console.log('🚀 TODO: ~ useLayoutEffect:varRef:', varRef.current);
        console.log('🚀 TODO: ~ useLayoutEffect:cbRef:', cbRef.current);
        console.log('🚀 TODO: ~ useLayoutEffect:inputRef:', inputRef.current);
        console.log('🚀 TODO: ~ useLayoutEffect:count:', count);
    });

    useLayoutEffect(() => {
        console.log('🚀 TODO: ~ useEffect:varRef:', varRef.current);
        console.log('🚀 TODO: ~ useEffect:cbRef:', cbRef.current);
        console.log('🚀 TODO: ~ useEffect:inputRef:', inputRef.current);
        console.log('🚀 TODO: ~ useEffect:count:', count);
    });

    return (
        <>
            <input type="number" ref={inputRef} />
            <button
                type="button"
                onClick={() => {
                    varRef.current += 1;
                    // cbRef.current += 1
                    if (inputRef.current) {
                        inputRef.current.value = String(
                            Number(inputRef.current?.value) + 1
                        );
                    }
                    setCount((c) => c + 1);
                }}
            >
                Increment (+2)
            </button>
        </>
    );
}

export default App;
