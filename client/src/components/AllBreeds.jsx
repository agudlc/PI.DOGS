import React, {  Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breed from "./Breed";
import {Link} from "react-router-dom";
import Paginate from "./Paginate";
import { setFalse } from "../redux/actions";

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
}, [state, trui]);
useEffect(() => {
    setTrue("Sort");
}, [stateFalse])

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
                <Link to={`/dogs/${breed.id}`} key={breed.id}>
                    <Breed id={breed.id} name={breed.name} weight={breed.weight[0]+ " Kg" + breed.weight[1]+ breed.weight[2] + " Kg"} image={breed.image}/>
                </Link >
            )}
            </div>
        </div>
    )
}