import React from "react";
import "./Header.css";

export default ({ sort: { by, asc }, column, lisa }) => {
  return (
    <th>
      {column}
      <button
        className={by === column && asc ? "ProductTableHeader-current" : ""}
        onClick={() => {
          lisa.handleSorting({
            sort: {
              by: column,
              asc: true
            }
          });
          lisa.log("This text won't be displayed!");
        }}
      >
        &#x25B2;
      </button>
      <button
        className={by === column && !asc ? "ProductTableHeader-current" : ""}
        onClick={() => {
          /*use the the parent component's callback*/
          lisa.handleSorting({
            sort: {
              by: column,
              asc: !true
            }
          });
          /*use the the grand parent component's callback*/
          //it could be possible to do lisa.parent.parent.[...].log()
          lisa.parent.log(
            "Jeez... Main.jsx component's 'log' callback has been called."
          );
        }}
      >
        &#x25BC;
      </button>
    </th>
  );
};
