import React from "react";
import styles from "./modules/Breed.module.css"

export default function Breed({id, name, weight, image, temperament,height, life_span}) {
    return (
    <div key={id}>
            <h1>{name}</h1>
            <h2>{temperament}</h2>
            <h2>{height}</h2>
            <h2>{weight}</h2>
            <h2>{life_span}</h2>
        <img src={image} height="300px" width="300px" alt="breed" />
    </div>
    )
}