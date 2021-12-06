import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function validate(breed) {
    let errors= {};
    // for (let keys in breed) {
    //     if( breed[`${keys}`] === "" || breed[`${keys}`] === []) {
    //         errors.name = "Some inputs are empty"
    //     }
    // }
    if (!breed.name || !breed.weightMax || !breed.weightMin || !breed.heightMin || !breed.heightMax || 
        !breed.lifespan) {
        errors.name = "Some inputs are empty"
    }
    return errors;
}


export default function Form () {

    const dispatch = useDispatch();

    const stateTemperament = useSelector((state) => state.temperament);

    const history = useHistory();

    const [breed, setBreed] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        lifespan: "",
        created: true,
        temperament: [],
    });

    const [errors, setErrors] = useState({});

    const handleChangue = (e) => {
        setBreed({
            ...breed,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...breed,
            [e.target.name]: e.target.value
        }));
    };

    const handleSelect = (e) => {
        setBreed({
            ...breed,
            temperament: [ ...breed.temperament, e.target.value]
        })
    };

    function handleDelete(el) {
        setBreed({
            ...breed,
            temperament: breed.temperament.filter((temp) => temp !== el),
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/api/dog", breed);
        setBreed({
                name: "",
                heightMin: "",
                heightMax: "",
                weightMin: "",
                weightMax: "",
                lifespan: "",
                created: true,
                temperament: [],
            });
        alert("New good boy in town");
        history.push("/home");

    }

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch]);

    return (
        <div>
                <Link to="/home">
                <button>GO BACK</button>
                </Link>
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input name="name" value={breed.name} onChange={handleChangue}></input>
                <label>heightMin</label>
                <input name="heightMin" value={breed.heightMin} onChange={handleChangue}></input>
                <label>heightMax</label>
                <input name="heightMax" value={breed.heightMax} onChange={handleChangue}></input>
                <label>weightMin</label>
                <input name="weightMin" value={breed.weightMin} onChange={handleChangue}></input>
                <label>weightMax</label>
                <input name="weightMax" value={breed.weightMax} onChange={handleChangue}></input>
                <label>lifespan</label>
                <input name="lifespan" value={breed.lifespan} onChange={handleChangue}></input>
                <select name="temperament" onChange={handleSelect}>{stateTemperament.map((temperaments) =>
                   <option key={temperaments.id} value={temperaments.name}>{temperaments.name}</option>
                )}
                </select>
                {errors.name && (
                    <p>{errors.name}</p>
                )}
                {!errors.name && breed.temperament.length && <button type="submit">CREAR</button>}
            </form>
            {breed.temperament.map((el) =>
            <div>
                <p>{el}</p>
                <button onClick={() => handleDelete(el)}>X</button>
            </div>)}
        </div>
    )
}