import {Component} from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: "", errorInfo: ""};
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <img src="../assets/red-error-icon.png" alt="Error" />
                    <p>Something went wrong...</p><br></br>
                    <details style={{whiteSpace: 'pre-wrap'}}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }

        return this.props.children;
    }
}