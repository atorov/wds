import { Toasts, ToastsProvider } from '../lib/toast';
import Form from './Form';

function App() {
    return (
        <ToastsProvider>
            <Toasts />
            <Form />
        </ToastsProvider>
    );
}

export default App;
