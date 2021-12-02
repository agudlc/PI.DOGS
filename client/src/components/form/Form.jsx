import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions";
import axios from "axios";

export default function Form () {

    const dispatch = useDispatch();

    const stateTemperament = useSelector((state) => state.temperament);

    const [breed, setBreed] = useState({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        created: true,
        temperament: [],
    });

    const handleChangue = (e) => {
        setBreed({
            ...breed,
            [e.target.name]: e.target.value
        })
    };

    const handleSelect = (e) => {
        setBreed({
            ...breed,
            temperament: [ ...breed.temperament, e.target.value]
        })
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/api/dog", breed);
        setBreed({
                name: "",
                height: "",
                weight: "",
                life_span: "",
                created: true,
                temperament: [],
            });
        alert("New good boy in town");

    }

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input name="name" value={breed.name} onChange={handleChangue}></input>
                <label>height</label>
                <input name="height" value={breed.height} onChange={handleChangue}></input>
                <label>weight</label>
                <input name="weight" value={breed.weight} onChange={handleChangue}></input>
                <label>lifespan</label>
                <input name="life_span" value={breed.life_span} onChange={handleChangue}></input>
                <select name="temperament" onChange={handleSelect}>{stateTemperament.map((temperaments) =>
                   <option key={temperaments.id} value={temperaments.name}>{temperaments.name}</option>
                )}
                </select>
                <button type="submit">CREAR</button>
            </form>
        </div>
    )
}