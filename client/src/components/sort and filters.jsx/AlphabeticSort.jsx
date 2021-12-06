import React from "react";
import { useDispatch } from "react-redux";
import { alphabeticSort, setTrue } from "../../redux/actions";
import styles from "../modules/AlphabeticSort.module.css"



export default function AlphabeticSort() {

    const dispatch = useDispatch();
    
 function handleChange (e) {
     e.preventDefault();
     dispatch(alphabeticSort(e.target.value));
     dispatch(setTrue());
   
}
    
    return (
        <div>
            <select onChange={handleChange}>
            <option value ="">Alphabetical Sort</option>
            <option value ="A">A to Z</option>
            <option value ="Z">Z to A</option>
            </select>
        </div>
    )
}