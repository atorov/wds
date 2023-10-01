import { Component } from 'react';

export default class CounterClass extends Component {
    state = {
        count: 0,
    };

    handleClick = () => {
        this.setState((currentState) => ({
            count: currentState.count + 1,
        }));
    };

    render() {
        return (
            <div>
                Count: {this.state.count}
                <br />
                <button type="button" onClick={this.handleClick}>
                    Increment
                </button>
            </div>
        );
    }
}
