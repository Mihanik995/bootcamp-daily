interface User {
    name?: string
    age?: number
    role?: string
}

export default function (props: User) {
    const blocks = Object.entries(props)
        .map(([key, value]) => `${key[0].toUpperCase() + key.slice(1)}: ${value}`)
        .join(' | ')

    return (
        <>
            <p>{blocks}</p>
        </>
    )
}