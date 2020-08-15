import React, { Component, useState } from "react";
import _ from "lodash";
import Jumbo from "../common/jumbo";
import SearchBox from "../common/searchBox";
import Counter from "../common/counter";
import EmployeesTable from "./employeesTable";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { getEmployees } from "../resources/employeeResources";
import { getTitles } from "../resources/titleService";
import { Paginate } from "../utils/paginate";
import "./style.css";

class Employees extends Component {
  state = {
    employees: [],
    titles: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedTitle: null, //?
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
    this.setState({ selectedTitle: title, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedTitle: null, currentPAge: 1 });
  };
  // handleSearch = (event) => {
  //   const value = event.target.value;
  //   this.setState({ userSearch: value });
  //   console.log(value);
  // };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  //RENDER MAIN COMPONENT
  render() {
    // const { length: count } = this.state.employees;
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedTitle,
      searchQuery,
      employees: allEmployees,
    } = this.state;

    //FILTER - If there is a search query, filter results, otherwise if selected title and its id are both truthy, apply a filter, otherwise return all employees
    let filtered = allEmployees;
    if (searchQuery)
      filtered = allEmployees.filter((emp) =>
        emp.lastName.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedTitle && selectedTitle._id)
      filtered = allEmployees.filter(
        (emp) => emp.title_id === selectedTitle._id
      );

    //SORT
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    //PAGINATE - Target items needed for pagintion
    const employees = Paginate(sorted, currentPage, pageSize);

    //RENDER - If there are employees return a table with employee data
    return (
      <>
        <Jumbo />

        <div className="container">
          <div className="row">
            <div className="col">
              <Counter />
            </div>

            <div className="col-4">
              <SearchBox value={searchQuery} onChange={this.handleSearch} />
            </div>
          </div>

          <div className="row">
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Employees;
