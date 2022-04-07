import React from 'react';
import './Result.css';
function Result({ recipe }) {
    return (
            <div className="recipe-item">
                <img
                    className="recipeTile__image"
                    src={recipe["recipe"]["image"]}
                    alt="tile-image"
                    onClick={() => window.open(recipe["recipe"]["url"])}
                />
                <p onClick={() => window.open(recipe["recipe"]["url"])}>{recipe["recipe"]["label"]}</p>
            </div>

    );
}


export default Result;