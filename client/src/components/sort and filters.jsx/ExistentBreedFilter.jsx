import React from "react";
import { useDispatch } from "react-redux";
import { existentBreedFilter, getBreeds } from "../../redux/actions";

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
    <div onClick={handleClick}>
        <button type="button" value="created">Breeds created</button>
        <button type="button" value="all">All breeds</button>
    </div>
    )
}