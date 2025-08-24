import {useEffect, useState} from "react";

interface User {
    id: number;
    name: string;
}

export default function () {
    const [data, setData] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
                setIsLoading(false)
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <>
            {isLoading
                ? (<h1>Loading...</h1>)
                : data.map((item) => <p key={item.id}>{item.id}: {item.name}</p>)
            }
        </>
    )
}