import {useState} from "react";

export default function () {
    const [counter, setCounter] = useState<number>(0)
    const [lastAction, setLastAction] = useState<'+' | '-' | null>()

    return (
        <>
            <div>
                <button onClick={() => {
                    setCounter(counter - 1)
                    setLastAction('-')
                }}>-</button>
                <button disabled>{counter}</button>
                <button onClick={() => {
                    setCounter(counter + 1)
                    setLastAction('+')
                }}>+</button>
            </div>
            {!!lastAction && <p>The last action is "{lastAction}"</p>}
        </>
    )
}