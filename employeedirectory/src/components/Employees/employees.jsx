import React, { Component } from "react";
import { getEmployees } from "../resources/employeeResources";
import Pagination from "../common/pagination";

class Employees extends Component {
  state = {
    employees: getEmployees(),
    pageSize: 4,
  };

  //Event Handlers
  handleDelete = (employee) => {
    //create new array with all the employees except the one you deleted
    const employees = this.state.employees.filter(
      (emp) => emp._id !== employee._id
    );
    this.setState({ employees: employees });
  };

  handleSort = (employee) => {
    const employees = this.state.employees.sort();
    this.setState({ employees });
  };

  handlePageChange = (page) => {
    console.log(page);
  };

  render() {
    const { length: count } = this.state.employees;
    //If there are no employees in the database return a message indicating
    if (count === 0) return <p> There are no employees in the Database </p>;

    //If there are employees return a table with employee data
    return (
      <>
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
                <td>{employee.title.name}</td>
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
          <Pagination
            itemsCount={count}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
          />
          {/* Can also use {this.state.movies.length} */}
        </table>
      </>
    );
  }
}

export default Employees;
