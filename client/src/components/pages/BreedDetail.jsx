import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { breedDetail, vaciate } from "../../redux/actions";
import Breed from "../Breed";
import styles from "../modules/BreedDetail.module.css"

export default function BreedDetail() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.breedDetail);
    const {id}= useParams();
    function handleClick() {
        dispatch(vaciate());
    }
    useEffect(() => {
        dispatch(breedDetail(id));
    }, [dispatch, id]);

    return ( 
            <div className={styles.divContainerDetail}>
                <div>
                    <Link to="/home">
                        <button className={styles.button} onClick={handleClick}>GO BACK</button>
                    </Link>
                </div>
                <div/>
                { state.length > 0 ? (<div>{state?.map(breed => 
                <Fragment>
                <Breed id={breed.id} 
                    name={breed.name} 
                    weight={breed.created? breed.weight : breed.weight[0] !== "NaN" ? 
                    "Min: " + breed.weight[0] + " Kg" + breed.weight[1] + "Max: " + breed.weight[2] + " Kg" : "That breed is unmeasurable"}
                    image={breed.image? breed.image : "https://i.ytimg.com/vi/A-sO9__4Cis/hqdefault.jpg"}
                    temperament={breed.temperament? breed.temperament 
                    : breed.temperaments? breed.temperaments.map((el) => el.name + (" ")) : "That's a misterious Breed"}
                    height={breed.created? breed.height : breed.height[2] !== undefined ? 
                    "Min: " + breed.height[0] + " cm" + breed.height[1] + "Max: " + breed.height[2] + " cm" : breed.height[0] }
                    life_span={breed.life_span}/>
                </Fragment>
                )}</div>): 
                <div className={styles.loading}>
                    <h1>...LOADING</h1>
                </div>}
            </div>
   )
}

/* <div>
                <h1>{state.name}</h1>
                <img src={state.image? state.image : "https://i.ytimg.com/vi/A-sO9__4Cis/hqdefault.jpg"} alt="Doggie" width="450px" height="300px" />
                <h3>Temperaments</h3>
                <span>{state.temperament ? state.temperament 
                : state.temperaments ? state.temperaments.map(el => el.name + (" ")) : "That's a misterious Breed"}</span>        
                <h3>Weight</h3>
                <span>{state.weight}</span>
                <h3>Height</h3>
                <span>{state.height}</span>
                <h3>lifeSpan</h3>
                <span>{state.life_span}</span>
                </div> */