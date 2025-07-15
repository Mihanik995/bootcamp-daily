import ErrorBoundary from "../components/ErrorBoundary.jsx";
import {Button, ButtonGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import PpstList from '../components/PostList.jsx'
import PostList from "../components/PostList.jsx";

export default function () {
    return (
        <div className="ms-3 mt-3">
            <Button href='/' variant="primary">Home</Button>
            <Button href='/profile' variant="secondary">Profile</Button>
            <Button href='/shop' variant="secondary">Shop</Button>
            <ErrorBoundary>
                <PostList />
            </ErrorBoundary>
        </div>
    )
}