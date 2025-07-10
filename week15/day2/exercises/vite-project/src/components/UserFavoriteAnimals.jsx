import {Component} from "react";

export default function UserFavoriteAnimals(props) {
    const {animals} = props

    return (
        <ul>
            {animals.map((animal, index) => (
                <li key={index}>{animal}</li>
            ))}
        </ul>
    )
}