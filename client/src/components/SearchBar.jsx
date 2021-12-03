import React, { useState } from "react";
import { useHistory } from "react-router";

export default function SearchBar() {
    
    const [breed, setBreed] = useState({
     name: "",   
    });

    const history= useHistory();

    const handleChange = (e) => {
        setBreed({
            ...breed,
            [e.target.name]: e.target.value, 
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={breed.name} type="text" placeholder="Search a breed" onChange={handleChange} />
            <button type="submit" ></button>
        </form>
    )
}