import './App.css'
import Greeting from "./components/Greeting.tsx";
import Counter from "./components/Counter.tsx";
import UserCard from "./components/UserCard.tsx";
import UserList from "./components/UserList.tsx";

function App() {
    return (
        <>
            <Greeting name='Mikle' messageCount={0}/>
            <Counter/>
            <UserCard name='John' age={25}/>
            <UserCard name='Abby' role='Data Scientist'/>
            <UserCard/>
            <UserCard name='Sath' age={32} role='Team Lead'/>
            <UserList/>
        </>
    )
}

export default App
