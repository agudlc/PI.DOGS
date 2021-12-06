import React, { Fragment, useEffect} from "react";
import { useDispatch} from "react-redux";
import { getBreeds } from "../../redux/actions";
import AllBreeds from "../AllBreeds";
import Nav from "../Nav";
import SearchBar from "../SearchBar";
import styles from "../modules/Home.module.css"


export default function Home() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);
  
  return (
        <div>
            <Fragment>
            <Nav/>
            <SearchBar/>
            <AllBreeds/>
            </Fragment>
        </div>
    )
}