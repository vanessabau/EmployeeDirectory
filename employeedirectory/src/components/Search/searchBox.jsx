import React, { useState } from "react";
import "./style.css";

function SearchBox({ userSearch, onChange }) {
  return (
    <div className="form-container">
      <form className="search">
        <div className="form-group">
          <label htmlFor="breed"></label>
          <input
            value={userSearch}
            onChange={onChange}
            // name="breed"
            // list="breeds"
            // type="text"
            // className="form-control"
            placeholder="Type to search"
            // id="breed"
          />
          {/* <datalist id="breeds">
            {props.breeds.map((breed) => (
            <option value={breed} key={breed} />
            ))}
          </datalist> */}
          <button
            type="submit"
            // onClick={props.handleFormSubmit}
            className="btn btn-warning btn-sm m-2"
          >
            Search
          </button>
          <span> Sort by column heading, filter by Title</span>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
