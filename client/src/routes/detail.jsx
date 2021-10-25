import React, { useEffect } from "react";
import { getCountry } from "../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { RatingView } from 'react-simple-star-rating'
import { Link } from "react-router-dom";
import icon from "../styles/home.png";
import '../styles/detail.css'


export default function Detail(props) {
  const id = props.match.params.cca3;
  const country = useSelector((state) => state.Country);
  const dispatch = useDispatch();
  const img = country.flags; 
  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]); 
  
  
  return (
    <div>
      <div className="detail">
      <div className="home-ico-img">
          <Link to="/home">
            <img src={icon} width='40px' height='40px' alt=""  />
          </Link>  
          </div>  
      <div className="head">       
      <h1 className="detail-title">{country.name}</h1>
           
      </div>
      
      <div className='full-info'>        
        
        <div className="info">
          <li>Capital: {country.capital}</li>
          <li>Name Code: {country.cca3}</li>          
          <li>Population: {country.population}</li>          
          <li>Area: {country.area}</li>
          <li>Subregion: {country.subregion}</li>          
          <li>Continents: {country.continents}</li>
        </div>
        <div className="img-container">
          <img className="det_img" src={img} width={400} alt="" />
        </div>
        </div>
        <h4>Activities:</h4>
        <div>{country.activities?.map((activity => 
          <div key={activity.name}>
          <h5>{activity.name}</h5>          
          <li>Duration:&nbsp;{activity.duration}&nbsp;hours</li>
          <li className="rating">Dificulty:&nbsp;<RatingView ratingValue={activity.dificulty} /* RatingView Props */ /></li>  
          <li>Season:&nbsp;{activity.season}</li>
          </div>
          ))}
          
          
        </div>
      </div>
        
    
    </div>
  );
}
 