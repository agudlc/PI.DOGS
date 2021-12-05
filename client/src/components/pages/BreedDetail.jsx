import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { breedDetail } from "../../redux/actions";

export default function BreedDetail() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.breedDetail);
    const {id}= useParams();
    useEffect(() => {
        dispatch(breedDetail(id));
    }, [dispatch, id]);

    return ( 
            <div>
                <Link to="/home">
                <button>GO BACK</button>
                </Link>
                <h1>{state.name}</h1>
                <img src={state.image? state.image : "https://i.ytimg.com/vi/A-sO9__4Cis/hqdefault.jpg"} alt="Doggie" width="450px" height="300px" />
                <h3>Temperaments</h3>
                <span>{state.temperament? state.temperament : "hehe"}</span>        
                <h3>Weight</h3>
                <span>{state.weight}</span>
                <h3>Height</h3>
                <span>{state.height}</span>
                <h3>lifeSpan</h3>
                <span>{state.life_span}</span>

            
            </div>
   )
}