import React from "react";
import styles from "./modules/AllBreed.module.css"

export default function AllBreed({name, weight, image, temperament,}) {
    return (
    <div className={styles.container}>
            <h2>{name}</h2>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p className={styles.txt}>Temperament:</p>
                    <p className={styles.txt}>{temperament}</p>
                    <p className={styles.txt}>Weight:</p>
                    <p className={styles.txt}>{weight}</p>
                </div>
                <div className={styles.img}>
                    <img src={image} height="350px" width="350px" alt="breed" />
                </div>
            </div>         
    </div>
    )
}