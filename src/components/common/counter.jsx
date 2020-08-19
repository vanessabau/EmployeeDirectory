//DEPENDENCIES
import React, { Component } from "react";
import { getEmployees } from "../resources/employeeResources";

//CREATE CLASS COMPONENT
class Counter extends Component {
  state = {
    employees: getEmployees(),
  };

  //Define elements to be rendered
  render() {
    //Retrieve number of employees in list, return a message if none exist
    const { length: count } = this.state.employees;
    if (count === 0) return <p> There are no employees in the Database </p>;

    return (
      <>
        <p
          //STYLE
          style={{
            fontFamily: "impact",
            fontSize: "1.6em",
            color: "darkgray",
            letterSpacing: ".07em",
            float: "left",
          }}
        >
          {" "}
          {/* Dynamically render the number of employees for the existing list */}
          {count} EMPLOYEES EXIST IN THE DATABASE <br />
          SORT BY COLUMN HEADING // FILTER BY TITLE
        </p>
      </>
    );
  }
}

//EXPORT
export default Counter;
