import React from "react";
import { Link } from "react-router-dom";
import './Snack.css';

function Snack({ snack }) {
    const { name, img_url } = snack
    //const url = window.location.origin;
    
    return (
        <div className="Snack"
            style={{ backgroundImage: `url(${img_url})`}}    
        >
            <div>
                <h1>You've selected {name}</h1>
            </div>
            {/* <div>
                <img width="500" src={url + img_url} alt={name}/>
            </div> */}
            <div className="links">
                <Link exact="true" to="/"><h2>Go Back</h2></Link>
            </div>
        </div>
    )
}

export default Snack;