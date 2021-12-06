import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBreedSearch } from "../redux/actions";
import styles from "./modules/SearchBar.module.css"

export default function SearchBar() {

    const dispatch = useDispatch();
    const stateBreedSearch = useSelector((state) => state.breedSearch);
    
    const [breed, setBreed] = useState({
     name: "",
     search: [],  
    });

    const handleChange = (e) => {
        setBreed({
            ...breed,
            [e.target.name]: e.target.value, 
        })
    };


    const handleSubmit = (e)  => {
        e.preventDefault();
        dispatch(getBreedSearch(breed.name));
        
    };

    useEffect(() => {
        setBreed({
            name: "",
            search: stateBreedSearch})
    }, [stateBreedSearch, dispatch] );
    
    return (
        <div>
            <div>
            <input name="name" value={breed.name} type="text" placeholder="Search a breed" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}></button>
            </div>
        <div>{
         breed.search?.map((el) => <Link to={`dogs/${el.id}`} key={el.id}>{el.name} </Link>)
            }</div>
        </div>
        
    )
}