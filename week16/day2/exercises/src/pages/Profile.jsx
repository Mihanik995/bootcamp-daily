import ErrorBoundary from "../components/ErrorBoundary.jsx";
import {Button, ButtonGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function () {
    return (
        <div className="ms-3 mt-3">
            <Button href='/' variant="secondary">Home</Button>
            <Button href='/profile' variant="primary">Profile</Button>
            <Button href='/shop' variant="secondary">Shop</Button>
            <ErrorBoundary>
                <h3>This is user profile</h3>
            </ErrorBoundary>
        </div>
    )
}