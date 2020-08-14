import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="form-container">
      <form className="search">
        <div className="form-group">
          <label htmlFor="breed"></label>
          <input
            // value={props.search}
            // onChange={props.handleInputChange}
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
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
