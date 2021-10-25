import React, { useEffect } from "react";
import { getCountries } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Pages from "../components/pages.jsx";
import Navbar from "../components/navbar.jsx";
import Filter from "../components/filter.jsx"
import icon from "../styles/create.png"
import "../styles/home.css";

  
export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])
    return (
        <div  className='home'>   
        <div className='navbar'>
        
          <Link to={"/create/"}>
            <img src={icon} width='60px' height='60px' alt="" className="img" />
          </Link>
          
        <Navbar/>   
        </div>  
        <div>
            <Filter/>
        </div>
        <br />
                    
            <div>
                <Pages/>
            </div>
        </div>
    )
}