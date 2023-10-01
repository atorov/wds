import './App.css';
import UserCard from './UserCard';
import user from './assets/user.json';

function App() {
    return (
        <div>
            <UserCard {...user} />
        </div>
    );
}

export default App;
