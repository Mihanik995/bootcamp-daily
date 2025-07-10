import {useState} from "react";

export default function () {
    const [color, setColor] = useState('red')

    return (
        <h1>My favorite color is <i>{color}</i></h1>
    )
}