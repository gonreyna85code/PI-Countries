import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getByRev,
  getAbc,
  getPop,
  getCountries,
  getConts,
  getByCon,
  getByAct,
  getActs
} from "../redux/actions.js";

export default function Filter() {
  const dispatch = useDispatch();
  const conts = useSelector((state) => state.Conts);
  const acts = useSelector((state) => state.Acts);
  const change = (e) =>
    e.target.value === ""
      ? dispatch(getCountries())
      : dispatch(getByCon(e.target.value));
  const change2 = (e) =>
    e.target.value === ""
      ? dispatch(getCountries())
      : dispatch(getByAct(e.target.value));
  useEffect(() => {
    dispatch(getConts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getActs());
  }, [dispatch]);
  return (
    <div>
      <select className="filtros" onChange={change} defaultValue="">
        <option key="0" value="" disabled hidden>
          &nbsp;&nbsp;CONTINENT:
        </option>
        <option key="01" value="">
          All
        </option>
        {conts.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <select className="filtros" onChange={change2} defaultValue="">
        <option key="0" value="" disabled hidden>
          &nbsp;&nbsp;ACTIVITIES:
        </option>
        <option key="01" value="">
          All
        </option>
        {acts?.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <button
        className="filtros"
        type="submit"
        onClick={() => dispatch(getByRev())}
      >
        Invert Order
      </button>
      <button
        className="filtros"
        type="submit"
        onClick={() => dispatch(getAbc())}
      >
        Order By Name
      </button>
      <button
        className="filtros"
        type="submit"
        onClick={() => dispatch(getPop())}
      >
        Order By Rating
      </button>
    </div>
  );
}
