import React from "react";
import styles from "./modules/Breed.module.css"

export default function Breed({id, name, weight, image, temperament,height, life_span}) {
    return (
    <div key={id} className={styles.divContainerBreed}>
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.divContent}>
            <div className={styles.divRight}>
            <p className={styles.contentText}>Temperament:</p>
            <p className={styles.contentText}>{temperament}</p>
            <div className={styles.divSpan}>
            <p  className={styles.contentText}>Height:</p>
            <p className={styles.contentText}>{height}</p>
            </div>
            <div className={styles.divSpan}>
            <p className={styles.contentText}>Weight:</p>
            <p className={styles.contentText}>{weight}</p>
            </div>
            <div className={styles.divSpan}>
            <p className={styles.contentText}>Lifespan:</p>
            <p className={styles.contentText}>{life_span}</p>
            </div>
            </div>
        <div className={styles.divLeft}>
        <img className={styles.img} src={image} height="450px" width="450px" alt="breed" />
        </div>
        </div>
    </div>
    )
}