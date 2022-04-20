import React, { Fragment, useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { getBreeds } from "../../redux/actions";
import AllBreeds from "../AllBreeds";
import Nav from "../Nav";
import SearchBar from "../SearchBar";
import styles from "../modules/Home.module.css"


export default function Home() {

  const state = useSelector(state => state.breeds);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);
  
  return (
        <div className={styles.divContainer}>{ state.length? 
            <Fragment>
              <div className={styles.searchBar}>
                <SearchBar/>
              </div>
              <div className={styles.nav}>
                <Nav/>
              </div>
              <div className={styles.allBreeds}>
                <AllBreeds/>
              </div>
              </Fragment> :
            <div className={styles.loading}>
              <h1>...LOADING</h1>
            </div>
        }</div>
    )
}