import React, { Component } from "react";
import { getEmployees } from "../resources/employeeResources";

class Counter extends Component {
  state = {
    employees: getEmployees(),
  };

  render() {
    const { length: count } = this.state.employees;
    if (count === 0) return <p> There are no employees in the Database </p>;

    return (
      <>
        <p
          style={{
            fontFamily: "impact",
            fontSize: "1.6em",
            color: "darkgray",
            letterSpacing: ".07em",
            float: "left",
          }}
        >
          {" "}
          {count} EMPLOYEES EXIST IN THE DATABASE <br />
          SORT BY COLUMN HEADING // FILTER BY TITLE
        </p>
      </>
    );
  }
}

export default Counter;
