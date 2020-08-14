import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  //Create an array of page numbers and use the map method to map each item to an <li>, then render the page number dynamically to create our pagination
  const { itemsCount, pageSize } = props;

  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pages.map((page) => (
          <li class="page-item">
            <a class="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
