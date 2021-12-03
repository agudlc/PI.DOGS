import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getTemperaments, temperamentFilter } from "../../redux/actions";

export default function TemperamentFilter() {
    
    const stateTemperament = useSelector((state) => state.temperament);

    const dispatch = useDispatch();

    
    
    const [ searchTemperament, setTemperament] = useState({
        temperament: "",
    });

   const handleChange = (e) => {
       setTemperament({
           temperament: e.target.value,
           
       })
   }
   const handleSubmit = (e) => {
       e.preventDefault();
       console.log(searchTemperament.temperament);
       dispatch(temperamentFilter(searchTemperament.temperament));
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
            <button type="submit" onClick={handleSubmit} >Search</button>
        </div>
    )
}