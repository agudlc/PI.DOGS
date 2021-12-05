import React from "react";
import styles from "./modules/Paginate.module.css"

export default function Paginate({breedsPerPage,state, paginate}) {
    
    let pageNumbers = [];

    for (let i = 1; i<=Math.ceil(state/breedsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={styles.ul}>
                {pageNumbers?.map(number => (
                    <li key={number} className={styles.li}>
                    <button type="button" className={styles.button} onClick={() => (paginate(number))}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}