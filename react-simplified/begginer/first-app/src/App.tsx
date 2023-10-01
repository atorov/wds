// import * as React from 'react';
import { Name } from './Name';
import { TodoList } from './TodoList';
import TodoListItem from './TodoListItem';

function App() {
    // return React.createElement(
    //     'h1',
    //     null,
    //     'Hello World!',
    //     React.createElement('span', null, ' Bye')
    // );
    return (
        <div>
            <TodoList />
            <ul>
                <TodoListItem isComplete />
                <TodoListItem />
                <TodoListItem isComplete>Foo</TodoListItem>
                <TodoListItem isComplete={false}>Bar</TodoListItem>
                <li>2</li>
                <li>3</li>
            </ul>
            <Name />
        </div>
    );
}

export default App;
