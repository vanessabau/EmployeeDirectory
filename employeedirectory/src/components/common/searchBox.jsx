import React, { useState } from "react";

function SearchBox({ value, onChange }) {
  return (
    <div className="form-container">
      <form className="search">
        <div className="form-group">
          <input
            type="text"
            name="query"
            value={value}
            className="form-control"
            placeholder="Search by last name"
            onChange={(e) => onChange(e.currentTarget.value)}
          />
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

export default SearchBox;
