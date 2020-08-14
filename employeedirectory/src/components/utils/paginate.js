import _ from "lodash";

export function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //convert items array to a lodash wrapper
  return _(items).slice(startIndex).take(pageSize).value();
  //use lodash to slice our array starting at the new index
}
