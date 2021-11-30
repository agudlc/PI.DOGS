import React, { useState} from "react";

export default function Form () {

    const [breed, setBreed] = useState({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        created: true,
    });

    const handleChangue = (e) => {
        setBreed({
            ...breed,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form>
                <label>name</label>
                <input name="name" value={breed.name} onChange={handleChangue}></input>
                <label>height</label>
                <input name="height" value={breed.height} onChange={handleChangue}></input>
                <label>weight</label>
                <input name="weight" value={breed.weight} onChange={handleChangue}></input>
                <label>lifespan</label>
                <input name="life_span" value={breed.life_span} onChange={handleChangue}></input>
            </form>
        </div>
    )
}