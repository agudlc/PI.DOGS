import React, {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Breed from "./Breed";
import {Link} from "react-router-dom";
import Paginate from "./Paginate";

export default function AllBreeds () {
const state = useSelector((state) => state.breeds);

const [currentPage, setCurrentPage ] = useState(1);
const [breedsPerPage] = useState(8);
const lastIndex = currentPage * breedsPerPage;
const firstIndex = lastIndex - breedsPerPage;
const currentBreeds = state.slice(firstIndex, lastIndex);

const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {

  }, [])
//   ${breed.id}
    return (
        <div>
            <div>
        <Paginate
        breedsPerPage={breedsPerPage}
        state={state.length}
        paginate={paginate}/>
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