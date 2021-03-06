//DEPENDENCIES
import React from "react";
import _ from "lodash";
import PropTypes from "prop-types"; //Use PropTypes to catch bugs related to type-checking

//
const Pagination = (props) => {
  //Create an array of page numbers and use the map method to map each item to an <li>, then render the page number dynamically to create our pagination
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  //Round decimals to the next integer
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //If there is only one page do not render pagination
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  //Define elements to be rendered
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {/* Take each page and map it to the following format */}
        {pages.map((page) => (
          <li
            key={page}
            //Dynamically render the state as active when the li is clicked
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            {/* eslint-disable-next-line */}
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

//Specify the types for each pagination prop and if it is required
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

//EXPORT
export default Pagination;
