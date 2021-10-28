import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCountries, postActivity } from "../redux/actions.js";
import { Link } from "react-router-dom";
import icon from "../styles/home.png";
import "../styles/create.css";

export default function Create() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [activity, setActivity] = useState({ country: [], season: "" });
  const countries = useSelector((state) => state.Countries);
  function submit(e) {
    e.preventDefault();
    dispatch(postActivity(activity));
    dispatch(getCountries());
    history.push("/home");
  }
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  console.log(activity);
  return (
    <div className="create">
      <div className="home-ico-img">
        <Link to="/home">
          <img src={icon} width="40px" height="40px" alt="" />
        </Link>
      </div>
      <h1 className="create-title">Create New Activity</h1>
      <form id="form" onSubmit={submit}>
        <div className="create-container">
        <div className="text_box">
          <div className="field">
            <label>Name:&nbsp;&nbsp;</label>
            <input
            required
              type="text"
              id="name"
              className="name-input"
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
          <br />
          <div>
            <label>Duration:&nbsp;&nbsp;</label>
            <input
            required
              min="1"
              className="text-input"
              type="number"
              onChange={(e) =>
                setActivity({ ...activity, duration: e.target.value })
              }
            />
            &nbsp;&nbsp;hours.
          </div>
          <br />
          <div>
            <label>Dificulty:&nbsp;&nbsp;</label>
            <input
            required
              className="text-input"
              type="number"
              min="1"
              max="5"
              onChange={(e) =>
                setActivity({ ...activity, dificulty: e.target.value })
              }
            />
            &nbsp;&nbsp;1 to 5.
          </div>
          <br />
          <div className="selbox">
            <label>Season:&nbsp;&nbsp;</label>
            <select
            required
              className="countries"
              id="season"
              type="text"
              multiple
              onClick={(e) =>
                setActivity({
                  ...activity,
                  season: activity.season.concat(e.target.value + ", "),
                })
              }
            >
              <option key="1" value="Summer">
                Summer
              </option>
              <option key="2" value="Winter">
                Winter
              </option>
              <option key="3" value="Fall">
                Fall
              </option>
              <option key="4" value="Spring">
                Spring
              </option>
            </select>
          </div>
        </div>
        <br />
        <div className="selbox">
          <label>&nbsp;&nbsp;&nbsp;&nbsp;Country:&nbsp;&nbsp;</label>
          <select
          required
            className="countries"
            id="country"
            multiple
            size="8"
            onClick={(e) =>
              setActivity({
                ...activity,
                country: [...activity.country, { country: e.target.value }],
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
        </div>
        <br />
        <div clasname="form-button">
        <input
          type="submit"
          value="Create"
          className="subm-create"
        />
      </div>
      </form>
      
    </div>
  );
}
