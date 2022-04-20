import React from "react";
import { Link } from "react-router-dom";
import styles  from "../modules/LandingPage.module.css";


export default function LandingPage() {
    return (
        <div className={styles.container}>
            <main>
                <Link to="/home">
                    <div >
                        <button type="button" className={styles.link}>Welcome to my wisdom <br></br> in the art of dog breeds</button>
                    </div>
                </Link>
            </main>
        </div>
        )
}