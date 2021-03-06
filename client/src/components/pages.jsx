import React, { useEffect, useState } from "react";
import Card from "./card.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Countries() {
  const countries = useSelector((state) => state.Filtrados2);
  const [currentPage, setCurrentPage] = useState(0);


  const next_Page = () => {
    if (countries.length <= currentPage + 8) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 8);
  };
  const prev_Page = () => {
    if (currentPage < 9) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 8);
    }
  };
  const first_Page = () => {
    setCurrentPage(0);
  };
  const last_Page = () => {
    setCurrentPage(countries.length - 8);
  };
  useEffect(() => {
    first_Page();
  }, [countries]);

  const list = countries.slice(currentPage, currentPage + 8);
  return (
    <div>          
      <div className='pager_container'> 
      <button className="pager" onClick={first_Page}>
        First Page
      </button>
      &nbsp;
      <button className="pager" onClick={prev_Page}>
        Prev Page
      </button>
      &nbsp;
      <button className="pager" onClick={next_Page}>
        Next Page
      </button>
      &nbsp;
      <button className="pager" onClick={last_Page}>
        Last Page
      </button>
      </div> 
      <div className="cards">
        {list.length === 0 ? (<div><h4>Oops!, no results</h4></div>) : list.map((e) => (
          <Link key={e.cca3} to={"/detail/" + e.cca3} style={{ textDecoration: 'none' }}>
            <Card Titulo={e.name} Imagen={e.flags} Continent={e.continents} />
          </Link>
        ))}  
      </div>
    </div>
  );
}