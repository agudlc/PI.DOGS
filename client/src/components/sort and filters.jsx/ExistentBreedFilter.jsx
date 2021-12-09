import React from "react";
import { useDispatch } from "react-redux";
import { existentBreedFilter, getBreeds } from "../../redux/actions";
import {Link} from "react-router-dom";
import styles from "../modules/ExistentBreedFilter.module.css"

export default function ExistentBreedFilter() {
    
    const dispatch = useDispatch();
    
    function handleClick (e) { 
        if (e.target.value === "created") {
        dispatch(existentBreedFilter());
        } else {
        dispatch(getBreeds());
        }
    }
    
    
    return (
    <div classname={styles.container} onClick={handleClick}>
        <button className={styles.buttons}type="button" value="created">Breeds created</button>
        <button className={styles.buttons}type="button" value="all">All breeds</button>
        <Link to={"/create"}>
        <button className={styles.buttons}type="button">Create a Breed</button>
        </Link>
    </div>
    )
}