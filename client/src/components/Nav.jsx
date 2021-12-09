import React, { Fragment } from "react";
import AlphabeticSort from "./sort and filters.jsx/AlphabeticSort";
import ExistentBreedFilter from "./sort and filters.jsx/ExistentBreedFilter";
import TemperamentFilter from "./sort and filters.jsx/TemperamentFilter";
import WeightSort from "./sort and filters.jsx/WeightSort";
import styles from "./modules/Nav.module.css"


export default function Nav() {
    return (
        <div className={styles.container}>
            <Fragment>
                <ExistentBreedFilter/>
                <TemperamentFilter/>
                <AlphabeticSort/>
                <WeightSort/>
            </Fragment>
        </div>
    )
}