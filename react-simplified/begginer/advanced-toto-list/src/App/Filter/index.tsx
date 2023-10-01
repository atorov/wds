import useTodosContext from '../context/todos/use-todos-context';

export default function Filter() {
    const {
        data: { filterTerm, hideCompleted },
        actions: { setFilterTerm, toggleCompleted },
    } = useTodosContext();

    const handleFilterTermChange: React.ChangeEventHandler<HTMLInputElement> = (
        ev
    ) => {
        setFilterTerm(ev.target.value);
    };

    function handleCompletedToggle() {
        toggleCompleted();
    }

    return (
        <div className="filter-form">
            <div className="filter-form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={filterTerm}
                    onChange={handleFilterTermChange}
                />
            </div>
            <label>
                <input
                    type="checkbox"
                    checked={hideCompleted}
                    onChange={handleCompletedToggle}
                />
                Hide Completed
            </label>
        </div>
    );
}
