import React, {  Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllBreed from "./AllBreed";
import {Link} from "react-router-dom";
import Paginate from "./Paginate";
import { setFalse } from "../redux/actions";
import styles from "./modules/AllBreeds.module.css"

export default function AllBreeds () {
const dispatch = useDispatch();
const state = useSelector((state) => state.breeds);
const stateFalse = useSelector(state => state.setFalse);
const [ trui, setTrue] = useState("");

const [currentPage, setCurrentPage ] = useState(1);
const [breedsPerPage] = useState(8);
const lastIndex = currentPage * breedsPerPage;
const firstIndex = lastIndex - breedsPerPage;
const currentBreeds = state.slice(firstIndex, lastIndex);

const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

useEffect(() => {
    setCurrentPage(1);
    dispatch(setFalse());
    console.log(trui);
}, [stateFalse, trui, dispatch]);
useEffect(() => {
    setTrue("Sort");
}, [stateFalse]);

    return (
        <div>
            <div>
             <Fragment>
             <Paginate
             breedsPerPage={breedsPerPage}
             state={state.length}
             paginate={paginate}/>
             </Fragment>
            </div>
            <div>
            {currentBreeds?.map(breed => 
                <Link style={{textDecoration:"none"}} to={`/dogs/${breed.id}`} key={breed.id}>
                    <AllBreed id={breed.id} 
                    name={breed.name}  
                    weight={breed.created? "Min: " + breed.weightMin + " Kg - Max: " + breed.weightMax + " Kg"   
                    : breed.weight[0] === "NaN" ? "That breed is unmeasurable" : 
                    breed.weight[1] === undefined ? "Min: " + breed.weight[0] + " Kg"  
                    : "Min: " + breed.weight[0] + " Kg - Max: " + breed.weight[1] + " Kg" }
                    image={breed.image? breed.image : "https://i.ytimg.com/vi/A-sO9__4Cis/hqdefault.jpg"}
                    temperament={breed.temperament? breed.temperament 
                    : breed.temperaments? breed.temperaments.map((el) => el.name + (" ")) : "That's a misterious Breed"}/>
                </Link >
            )}
            </div>
        </div>
    )
}