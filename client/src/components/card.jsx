import React from "react";



export default function Card(props) {
    const { Titulo, Imagen, Continent } = props;
    return (
        <div>
           <li>
           <img width={100}src={Imagen} alt="No imagen"/>
           <div>
              <h4>{Titulo}</h4>
              <h5>{Continent}</h5>
              
           </div>
           </li>
           
        </div>
    )
};