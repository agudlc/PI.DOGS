import React from "react";
import { useDispatch, } from "react-redux";
import { setTrue, weightSort } from "../../redux/actions";
import styles from "../modules/WeightSort.module.css"


export default function WeightSort() {
    const dispatch = useDispatch();

    function handleChange (e) {
        e.preventDefault();
        dispatch(weightSort(e.target.value));
        dispatch(setTrue());
   }
    
    return (
            <div>
            <select className={styles.select} onChange={handleChange}>
            <option value ="">Weight Sort</option>
            <option value ="A">Ascendent</option>
            <option value ="D">Descendent</option>
            </select>
        </div>
        
    )
}