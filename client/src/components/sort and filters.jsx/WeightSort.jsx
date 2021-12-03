import React from "react";
import { useDispatch } from "react-redux";
import { weightSortAsc, weightSortDes } from "../../redux/actions";


export default function WeightSort() {
    const dispatch = useDispatch();
    
    function handleChange (e) {
        if (e.target.value === "A") {
        dispatch(weightSortAsc());
       } else if (e.target.value === "D") {
           dispatch(weightSortDes());
       } else {
           return
       }
   }  
    
    return (
            <div>
            <select onChange={handleChange}>
            <option value ="">Weight Sort</option>
            <option value ="A">Ascendent</option>
            <option value ="D">Descendent</option>
            </select>
        </div>
        
    )
}