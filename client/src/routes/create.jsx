import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, postActivity } from "../redux/actions.js";


export default function Create() {
  const dispatch = useDispatch();
  const [activity, setActivity] = useState({country:[],});  
  const countries = useSelector((state) => state.Countries);
  function submit(e) {
    e.preventDefault(); 
    dispatch(postActivity(activity));  
  }
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  console.log(activity);
  return (
    <div className="create">
    
      <h1 className="create_title">Create New Activity</h1>
      <form id="form" className="create_container" onSubmit={submit}>
        <div className="text_box">
          <div className="field">
            <label>Name:&nbsp;</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) =>
                setActivity({
                  ...activity,
                  name:
                    e.target.value.charAt(0).toUpperCase() +
                    e.target.value.substring(1),
                })
              }
            />
          </div>
        </div>
        <div>
        <label>Country:&nbsp;</label>
          <select
            id="country"
            multiple
            size="6"
            onClick={(e) =>
                setActivity({
                ...activity,
                country: [...activity.country, { country: e.target.value }] ,
              })
            }
          >
            {countries.map((e) => (
              <option key={e.name} value={e.cca3}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        
        
        <div>
        <label>Dificulty:&nbsp;</label>
          <input
            type="number"
            onChange={(e) =>
                setActivity({ ...activity, dificulty: e.target.value })
            }
          />
        </div>
        <div>
        <label>Duration:&nbsp;</label>
          <input
            type="number"
            onChange={(e) =>
                setActivity({ ...activity, duration: e.target.value })
            }
          />
        </div>
        <div>
        <label>Season:&nbsp;</label>
        <input
              type="text"
              onChange={(e) =>
                setActivity({
                  ...activity,
                  season: e.target.value,                    
                })
              }
            />
        </div>
        
        <div>
          <input type="submit" value="Create" className="create_button" />
        </div>
      </form>
    </div>
  );
}