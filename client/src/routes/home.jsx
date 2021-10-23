import React, { useEffect } from "react";
import { getCountries } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import Pages from "../components/pages.jsx";


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])
    return (
        <div  className='home'>                 
            <div>
                <Pages/>
            </div>
        </div>
    )
}