import React, {  useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getTemperaments, temperamentFilter } from "../../redux/actions";

export default function TemperamentFilter() {
    
    const stateTemperament = useSelector((state) => state.temperament);

    const dispatch = useDispatch();

   const handleChange = (e) => {
       e.preventDefault();
       dispatch(temperamentFilter(e.target.value));
   }
   useEffect(() => {
    dispatch(getTemperaments());
}, [dispatch]);
    
    return (
        <div >
            <label>Search for a breed for his temperament</label>
            <select name="temperament" onChange={handleChange} >{stateTemperament.map((temperaments) =>
                   <option key={temperaments.id} value={temperaments.name}>{temperaments.name}</option>)}
            </select>
            
        </div>
    )
}