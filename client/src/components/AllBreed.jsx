import React from "react";
import styles from "./modules/Breed.module.css"

export default function AllBreed({name, weight, image, temperament,}) {
    return (
    <div className={styles.divContainerBreed}>
            <h1>{name}</h1>
            <h3>Temperament:</h3>
            <h3>{temperament}</h3>
            <h3>Weight:</h3>
            <h3>{weight}</h3>
        <img src={image} height="300px" width="300px" alt="breed" />
    </div>
    )
}