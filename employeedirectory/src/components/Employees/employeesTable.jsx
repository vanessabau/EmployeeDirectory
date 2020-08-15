import React, { Component } from "react";

class EmployeesTable extends Component {
  raiseSort = (path) => {
    //Handle both ascending and descending sorting
    //Clone and compare to change sort order, otherwise sort ascending
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn); //raise sort event
  };

  render() {
    const { employees, onDelete } = this.props;

    return (
      <table className="table">
        <thead>
          <tr
            style={{
              fontFamily: "impact",
              fontSize: "1.3em",
              cursor: "pointer",
            }}
          >
            <th onClick={() => this.raiseSort("firstName")}>FIRST NAME</th>
            <th onClick={() => this.raiseSort("lastName")}>LAST NAME</th>
            <th onClick={() => this.raiseSort("title.name")}>TITLE</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>RATE/YR</th>
            <th style={{ cursor: "default" }}>DELETE EMPLOYEE</th>
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
                  onClick={() => onDelete(employee)}
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

export default EmployeesTable;
