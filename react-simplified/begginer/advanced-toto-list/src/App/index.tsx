import AddNew from './AddNew';
import Filter from './Filter';
import Todos from './Todos';
import TodosContextProvider from './context/todos';
import './style.css';

function App() {
    return (
        <TodosContextProvider>
            <>
                <Filter />
                <Todos />
                <AddNew />
            </>
        </TodosContextProvider>
    );
}

export default App;
