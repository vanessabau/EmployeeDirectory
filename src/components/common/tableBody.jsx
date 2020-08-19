//DEPENDENCIES
import React, { Component } from "react";
import _ from "lodash";

//CREATE COMPONENT CLASS
class TableBody extends Component {
  //RENDER
  render() {
    //Destructure
    const { data, columns } = this.props;

    //Define elements to be returned
    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((column) => (
              <td>{_.get(item, column.path)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

//EXPORT
export default TableBody;
