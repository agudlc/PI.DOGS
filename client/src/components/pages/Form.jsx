import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styles from "../modules/Form.module.css"

function validate(breed) {
    let errors= {};
    const nums = new RegExp("^\s*?[0-9]{1,2}\s*$");
    const numsHeight = new RegExp("^\s*?[0-9]{1,3}\s*$")
    // for (let keys in breed) {
    //     if( breed[`${keys}`] === "" || breed[`${keys}`] === []) {
    //         errors.name = "Some inputs are empty"
    //     }
    // }
    if (!breed.name || !breed.weightMax || !breed.weightMin || !breed.heightMin || !breed.heightMax || 
        !breed.lifespan ) {
        errors.name = "Some inputs are empty"
    }
    if (!nums.test(breed.weightMax) || !nums.test(breed.weightMin) || !nums.test(breed.lifespan)) {
        errors.numbers = "Weight and lifespan has to be possible numbers in each field"
    }
    if (!numsHeight.test(breed.heightMax) || !numsHeight.test(breed.heightMin)) {
        errors.numbers2 = "Height has to be a possible number"
    }
    if (breed.weightMin > breed.weightMax) {
        errors.weight = "The min has to be lower to max"
    }
    if (breed.heightMin > breed.heightMax) {
        errors.height = "The min has to be lower to max"
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
        <div className={styles.divContainer}> 
            <div>
                <Link to="/home">
                    <button className={styles.button}>GO BACK</button>
                </Link>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Name</label>
                <input name="name" value={breed.name} onChange={handleChangue}></input>
                <label>Height Min.</label>
                <input name="heightMin" value={breed.heightMin} onChange={handleChangue}></input>
                <label>Height Max.</label>
                <input name="heightMax" value={breed.heightMax} onChange={handleChangue}></input>
                {errors.height && 
                <div>
                    <span>{errors.height}</span>
                </div>}
                <label>Weight Min.</label>
                <input name="weightMin" value={breed.weightMin} onChange={handleChangue}></input>
                <label>Weight Max.</label>
                <input name="weightMax" value={breed.weightMax} onChange={handleChangue}></input>
                {errors.weight && 
                <div>
                    <span>{errors.weight}</span>
                </div>}
                <label>Lifespan</label>
                <input name="lifespan" value={breed.lifespan} onChange={handleChangue}></input>
                <select name="temperament" onChange={handleSelect}>{stateTemperament.map((temperaments) =>
                   <option key={temperaments.id} value={temperaments.name}>{temperaments.name}</option>
                )}
                </select>
                {!errors.name && breed.temperament.length ? 
                <div>
                    <button type="submit">CREAR</button>
                </div> :
                <div>
                    <span>{errors.name}</span>
                </div>}
                {errors.numbers && 
                <div>
                    <span>{errors.numbers}</span>
                </div>}
                {errors.numbers2 && 
                <div>
                    <span>{errors.numbers2}</span>
                </div>}
                {breed.temperament.map((el) =>
                    <div>
                        <p>{el}</p>
                        <button type="button" onClick={() => handleDelete(el)}>X</button>
                    </div>)}
            </form>
        </div>
    )
}


// {errors.name && (
//     <p>{errors.name}</p>
// )}