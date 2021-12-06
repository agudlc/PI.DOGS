import React from "react";
import { Link } from "react-router-dom";
import styles  from "../modules/LandingPage.module.css";


export default function LandingPage() {
    return (
        <div className={styles.divContainerLanding}>
            <div>
                <Link to="/home">
                    <div >
                        <button type="button" className={styles.button}>Welcome to my wisdom in the art of dog's breeds</button>
                    </div>
                </Link>
            </div>
        </div>
        )
}