import React, { Component } from "react";
import EmployeesTable from "./employeesTable";
import { getEmployees } from "../resources/employeeResources";
import Pagination from "../common/pagination";
import { Paginate } from "../utils/paginate";
import ListGroup from "../common/listGroup";
import { getTitles } from "../resources/titleService";
import _ from "lodash";
import "./style.css";

class Employees extends Component {
  state = {
    employees: [],
    titles: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "lastName", order: "asc" },
  };

  //DEFINE STATE AFTER MOUNTING
  componentDidMount() {
    const titles = [{ _id: "", name: "ALL EMPLOYEES" }, ...getTitles()];
    this.setState({ employees: getEmployees(), titles });
  }

  //EVENT HANDLERS
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

  handleTitleSelect = (title) => {
    this.setState({ selectedTitle: title, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  //RENDER MAIN COMPONENT
  render() {
    const { length: count } = this.state.employees;
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedTitle,
      employees: allEmployees,
    } = this.state;

    //FILTER - If selected title and its id are both truthy, apply a filter, otherwise return all employees
    const filtered =
      selectedTitle && selectedTitle._id
        ? allEmployees.filter((emp) => emp.title._id === selectedTitle._id)
        : allEmployees;

    //SORT
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    //PAGINATE - Target items needed for pagintion
    const employees = Paginate(sorted, currentPage, pageSize);

    //RENDER - If there are employees return a table with employee data
    return (
      <>
        <div style={{ padding: "0" }} className="container">
          <div style={{ width: "100%", margin: "0" }} className="row">
            <div className="col-2">
              <ListGroup
                items={this.state.titles}
                selectedItem={this.state.selectedTitle}
                onItemSelect={this.handleTitleSelect}
              />
            </div>

            <div className="col">
              <EmployeesTable
                employees={employees}
                sortColumn={sortColumn}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
              />
              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
              {/*Render components with their props*/}
              {/* Can also use {this.state.employees.length} */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Employees;
