import React, {  useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getTemperaments, setTrue, temperamentFilter } from "../../redux/actions";
import styles from "../modules/TemperamentFilter.module.css"

export default function TemperamentFilter() {
    
    const stateTemperament = useSelector((state) => state.temperament);

    const dispatch = useDispatch();

   const handleChange = (e) => {
       e.preventDefault();
       dispatch(temperamentFilter(e.target.value));
       dispatch(setTrue());
   }
   useEffect(() => {
    dispatch(getTemperaments());
}, [dispatch]);
    
    return (
        <div className={styles.container} >
            <label className={styles.content} >Search for a breed for his temperament</label>
            <select className={styles.content}  name="temperament" onChange={handleChange} >{stateTemperament.map((temperaments) =>
                   <option key={temperaments.id} value={temperaments.name}>{temperaments.name}</option>)}
            </select>
            
        </div>
    )
}