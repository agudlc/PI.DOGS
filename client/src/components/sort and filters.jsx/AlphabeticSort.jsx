import React from "react";
import { useDispatch } from "react-redux";
import { alphabeticAscSort, alphabeticDesSort } from "../../redux/actions";



export default function AlphabeticSort() {

    const dispatch = useDispatch();
    
 function handleChange (e) {
     if (e.target.value === "A") {
     dispatch(alphabeticAscSort());
    } else if (e.target.value === "Z") {
        dispatch(alphabeticDesSort());
    } else {
        return
    }
}  
    
    return (
        <div>
            <select onChange={handleChange}>
            <option value ="">Choose</option>
            <option value ="A">A to Z</option>
            <option value ="Z">Z to A</option>
            </select>
        </div>
    )
}