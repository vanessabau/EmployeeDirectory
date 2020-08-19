// The paginate component utilizes lodash to limit the number of items per page
//This connects to a series of buttons rendered on the bottom of the page that allow users to toggle between pages

import _ from "lodash";

export function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //convert items array to a lodash wrapper
  return _(items).slice(startIndex).take(pageSize).value();
  //use lodash to slice our array starting at the new index
}
