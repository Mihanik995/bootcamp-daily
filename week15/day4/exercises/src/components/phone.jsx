import {useState} from "react";

export default function (props) {
    const [brand, setBrand] = useState('Samsung')
    const [model, setModel] = useState('Galaxy S20')
    const [color, setColor] = useState('black')
    const [year, setYear] = useState(2020)

    return (
        <div>
            <h1>My phone is {brand}</h1>
            <p>It is {color} {model} from {year}</p>
            <button onClick={() => setColor('blue')}></button>
        </div>
    )
}