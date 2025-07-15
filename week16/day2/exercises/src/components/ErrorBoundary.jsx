import {Component} from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: null, errorInfo: null};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, error: error, errorInfo: errorInfo});
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h1>Something went wrong...</h1>
                    <p>{this.state.error}</p>
                </>
            )
        }

        return this.props.children;
    }

}