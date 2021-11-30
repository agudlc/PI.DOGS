import React from "react";
import { useSelector } from "react-redux";
import Breed from "./Breed";

export default function AllBreeds () {
const state = useSelector((state) => state.breeds);

    return (
        <div>
            {state.map(breed => 
                <div key={breed.id}>
                    <Breed id={breed.id} name={breed.name} weight={breed.weight} image={breed.image}/>
                </div>
            )}
        </div>
    )
}