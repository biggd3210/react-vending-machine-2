import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine() {
    
    return (
        <div className="VendingMachine">
            <div className="headline">
                <h1>Hello, I am a vending machine. You can call me Cl4P Tr4p!</h1>
            </div>
            <div className="links">
                <Link exact="true" to="/doritos"><h2>Doritos</h2></Link>
                <Link exact="true" to="/coke"><h2>Coke</h2></Link>
                <Link exact="true" to="/takis"><h2>Takis</h2></Link>
                <Link exact="true" to="/arizona"><h2>Arizona Tea</h2></Link>
                <Link exact="true" to="/snickers"><h2>Snickers</h2></Link>
            </div>
        </div>
    )
}

export default VendingMachine;