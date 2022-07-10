import React from "react";
import { tedhenat } from "./elemntsList";
import './Perdorimi.css';
const Perdorimi = (props) => {
    return(
        <div className="Perdorimi">
            {tedhenat.map((props)=> { 
                return(
                    <div className="permbajtja">  
                   <h5>  {props.icon} {props.title}</h5>
                    <p>{props.description}</p>
                    </div>
                )

            

} ) }
        </div>
    )
} 
export default Perdorimi