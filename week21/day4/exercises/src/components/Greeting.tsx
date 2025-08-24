interface Greeting {
    name: string;
    messageCount: number;
}

export default function (props: Greeting) {
    return (
        <>
            <h1>Hello, {props.name}</h1>
        </>
    )
}