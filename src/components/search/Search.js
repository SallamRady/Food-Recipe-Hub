import React, {useState} from 'react';
import './Search.css';
import axios from "axios";
import Result from "../Result/Result";

function Search(){
    const YOUR_APP_ID = "f3f07b8c";
    const YOUR_APP_KEY = "12a6c5a1b01ee2ddcad04e1f248510c8";
    const [query, setQuery] = useState("");
    const [healthLabel, setHealthLabel] = useState("vegetarian");
    const [recipes, setRecipes] = useState([]);
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

    const getRecipe = async ()=>{
        await axios.get(url).then(
            (res)=>{
                setRecipes(res.data.hits);
                console.log(recipes);
            }
        ).catch(
            (err)=>console.log(err)
        )
    }
    return (
        <div className='search'>
            <input
                type='text'
                placeholder='type your recipe'
                onChange={(e)=>setQuery(e.target.value)}
                />
            <select
                onChange={(e)=>{
                    setHealthLabel(e.target.value)
                    console.log(healthLabel);
                }}
            >
                <option>vegan</option>
                <option>vegetarian</option>
                <option>dairy-free</option>
                <option>wheat-free</option>
                <option>dairy-free</option>
                <option>low-sugar</option>
            </select>
            <button onClick={getRecipe}>Get Recipe</button>
            <div className='contentResult'>
                {
                    recipes.map(
                        (recipe) => (<Result key={Math.floor(Math.random()*100)}  recipe={recipe} />)
                    )
                }
            </div>
        </div>
    );
}

export default Search;