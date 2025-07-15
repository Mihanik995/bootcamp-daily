import {Component} from "react";

export default class BuggyCounter extends Component {
    constructor() {
        super();
        this.state = {counter: 0}
    }

    handleClick = () => {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        if (this.state.counter >= 5) {
            throw new Error('I crashed!')
        }

        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}