import './App.css'
import CarInfo from 'components/car.jsx'

function App() {
    const carinfo = {name: "Ford", model: "Mustang"};

    return (
        <div>
            <CarInfo {...carinfo} />
        </div>
    )
}

export default App
