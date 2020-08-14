import React, { Component } from "react";
import { getEmployees } from "../resources/employeeResources";
import Pagination from "../common/pagination";
import { Paginate } from "../utils/paginate";

class Employees extends Component {
  state = {
    employees: getEmployees(),
    currentPage: 1,
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

  handlePageChange = (page) => {
    //set the current page property to current page and update the state
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.employees;
    const { pageSize, currentPage, employees: allEmployees } = this.state;
    //If there are no employees in the database return a message indicating
    if (count === 0) return <p> There are no employees in the Database </p>;

    const employees = Paginate(allEmployees, currentPage, pageSize);

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
            {/* Render the list of employees */}
            {employees.map((employee) => (
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
          {/*render the Pagination component with the following props*/}
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
          {/* Can also use {this.state.movies.length} */}
        </table>
      </>
    );
  }
}

export default Employees;
