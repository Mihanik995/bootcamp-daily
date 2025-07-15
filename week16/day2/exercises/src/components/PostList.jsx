import data from '../assets/data.json'

export default function () {
    return (
        <>
            <h1>Hi this is a Title!</h1>
            {data.map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                </div>
            ))}
        </>
    )
}