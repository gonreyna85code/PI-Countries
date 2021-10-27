import React, { useEffect } from "react";
import { getCountries } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Pages from "../components/pages.jsx";
import Navbar from "../components/navbar.jsx";
import Filter from "../components/filter.jsx";

import "../styles/home.css";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="navigation">
        <Navbar />
        <div className="nav-container">
          <Link to={"/create/"} style={{ textDecoration: "none" }}>
            <h2 className="nav-title">★ New Activity</h2>
          </Link>
        </div>
      </div>      
        <Filter />      
        <Pages />    
    </div>
  );
}
