import useLocalStorage from './useLocalStorage';

function App() {
    const [firstName, setFirstName] = useLocalStorage(
        'FIRST_NAME',
        'Who are you?'
    );

    // Bonus:
    const [lastName, setLastName] = useLocalStorage('LAST_NAME', () => {
        return 'Default';
    });

    // Bonus:
    const [hobbies, setHobbies] = useLocalStorage('HOBBIES', [
        'Programming',
        'Weight Lifting',
    ]);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                }}
            >
                <label>First Name</label>
                <input
                    type="text"
                    value={firstName || ''}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <button
                    type="button"
                    onClick={() => {
                        setFirstName(undefined);
                    }}
                >
                    Clear out
                </button>
            </div>

            {/* Bonus: */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                }}
            >
                <label>Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            {/* Bonus: */}
            <div>{hobbies.join(', ')}</div>
            <button
                onClick={() =>
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    setHobbies((currentHobbies: any) => [
                        ...currentHobbies,
                        'New Hobby',
                    ])
                }
            >
                Add Hobby
            </button>
        </>
    );
}

export default App;
