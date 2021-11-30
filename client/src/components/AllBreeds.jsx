import React from "react";
import { useSelector } from "react-redux";
import Breed from "./Breed";
import {Link} from "react-router-dom";

export default function AllBreeds () {
const state = useSelector((state) => state.breeds);

    return (
        <div>
            {state.map(breed => 
                <Link to={`/dogs/${breed.id}`} key={breed.id}>
                    <Breed id={breed.id} name={breed.name} weight={breed.weight} image={breed.image}/>
                </Link >
            )}
        </div>
    )
}