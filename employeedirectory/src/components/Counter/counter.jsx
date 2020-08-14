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
            fontSize: "1.5em",
            color: "gray",
            letterSpacing: ".08em",
            textShadow: "1px 1px 1px black",
            float: "right",
          }}
        >
          {" "}
          {count} EMPLOYEES EXIST IN THE DATABASE
        </p>
      </>
    );
  }
}

export default Counter;
