import React from "react";
import { Link } from "react-router-dom";
import styles  from "../modules/LandingPage.module.css";


export default function LandingPage() {
    return (
        <Link to="/home">
        <button type="button" className={styles.button}></button>
        </Link>
        )
}