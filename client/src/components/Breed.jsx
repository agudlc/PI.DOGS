import React from "react";

export default function Breed({id, name, weight, image}) {
    return (
    <div key={id}>
            <h1>{name}</h1>
            <h2>{weight}</h2>
        <img src={image} height="300px" width="300px" alt="breed" />
    </div>
    )
}