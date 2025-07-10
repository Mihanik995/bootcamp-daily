import {useState} from "react";

export default function (props) {
    const {name, model} = props
    const [color, setColor] = useState('yellow')

    return <p>This car is {color} {name} {model}</p>
}