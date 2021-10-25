import React from "react";

export default function Card(props) {
  const { Titulo, Imagen, Continent } = props;
  return (
    <div className="card">      
        <h2 className="card-title">{Titulo}</h2>
        <div className='img_container'>
        <img src={Imagen} alt="No imagen" className='card-img'/>
        </div>
        <h5>Continent:&nbsp;{Continent}</h5>    
        <br />
    </div>
    
  );
}
