import React from "react";

export default function Card(props) {
  const { Titulo, Imagen, Continent } = props;
  return (
    <div>      
        <h4>{Titulo}</h4>
        <img width={100} src={Imagen} alt="No imagen" />
        <h5>{Continent}</h5>    
        <br />
    </div>
    
  );
}
