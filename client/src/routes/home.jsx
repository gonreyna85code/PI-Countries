import React, { useEffect } from "react";
import { getCountries } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import Pages from "../components/pages.jsx";
import Navbar from "../components/navbar.jsx";
import icon from "../styles/create.png"


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])
    return (
        <div  className='home'>   
        <div>
        <a href="/create" className="icon">
          <div>
            <img src={icon} width='60px' height='60px' alt="" className="img" />
          </div>
        </a>
        <div>
            <Navbar/>
        </div>
      </div>              
            <div>
                <Pages/>
            </div>
        </div>
    )
}