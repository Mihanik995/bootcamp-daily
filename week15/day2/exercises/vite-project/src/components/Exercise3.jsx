import './Exercise.css'

export default function Exercise () {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    return (
        <div>
            <h1 style={{ ...style_header }}>Red h1</h1>
            <p className='para'>Some paragraph</p>
            <a href='#'>Some link</a>
            <form>Some form</form>
            <img src='src/assets/react.svg' alt='react image' />
            <li>Some list</li>
        </div>
    )
}