import {useState} from "react";

export default function () {
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState()

    function sendMessage(e) {
        e.preventDefault()
        fetch('http://localhost:3000/api/world', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message})
        }).then(res => res.json())
            .then(json => setResponse(json))
    }

    return (
        <>
            <form onSubmit={(e) => sendMessage(e)}>
                <h3>Post to server:</h3>
                <input type={"text"} value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type={"submit"}>Submit</button>
            </form>
            <h3>{!!response && response.message}</h3>
        </>
    )
}