import React from "react";
import styles from "./modules/Breed.module.css"

export default function Breed({id, name, weight, image, temperament,height, life_span}) {
    return (
    <div key={id} className={styles.divContainerBreed}>
            <h1>{name}</h1>
            <h3>{temperament}</h3>
            <h3>{height}</h3>
            <h3>{weight}</h3>
            <h3>{life_span}</h3>
        <img src={image} height="300px" width="300px" alt="breed" />
    </div>
    )
}