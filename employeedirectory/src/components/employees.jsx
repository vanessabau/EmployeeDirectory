import React, { Component } from "react";
import { getEmployees } from "../resources/employeeResources";

class Employees extends Component {
  state = {
    employees: getEmployees(),
  };

  handleDelete = (employee) => {
    //create new array with all the employees except the one you deleted
    const employees = this.state.employees.filter(
      (emp) => emp._id !== employee._id
    );
    this.setState({ employees: employees });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr
            style={{
              fontFamily: "impact",
              fontSize: "1.3em",
            }}
          >
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>TITLE</th>
            <th>RATE/YR</th>
            <th>DELETE EMPLOYEE</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.genre.name}</td>
              <td>${employee.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(employee)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Employees;
