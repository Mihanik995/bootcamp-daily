import {useState} from "react";

export function ClickMeButton () {
    function clickMe() {
        alert('I was clicked!')
    }

    return <button onClick={clickMe}>Click Me!</button>
}

export function Input() {
    const [inputValue, setInputValue] = useState('')

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            alert(`You entered: ${inputValue}`);
        }
    }

    return <input type='text'
               value={inputValue}
               onChange={e => setInputValue(e.target.value)}
               onKeyDown={handleKeyDown}
               placeholder='Press the ENTER key!'/>
}

export function OnOffButton () {
    const [isToggleOn, setToggleOn] = useState(true)

    return <button onClick={() => setToggleOn(!isToggleOn)}>
        {isToggleOn ? 'ON' : 'OFF'}
    </button>
}