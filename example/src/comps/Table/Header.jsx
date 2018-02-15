import React from "react";
import "./Header.css";

export default ({ sort: { by, asc }, column, lisa }) => {
  return (
    <th>
      {column}
      <button
        className={by === column && asc ? "ProductTableHeader-current" : ""}
        onClick={() =>
         {
          lisa.handleSorting({
            sort: {
              by: column,
              asc: true
            }
          })
          lisa.log("This text won't be displayed!")
         }
        }
      >
        &#x25B2;
      </button>
      <button
        className={by === column && !asc ? "ProductTableHeader-current" : ""}
        onClick={() => {
          lisa.handleSorting/*load the callback n°0 from the parent component*/({
            sort: {
              by: column,
              asc: !true
            }
          })
          /*load the callback n°1 from the grand parent component*/
          //it could be possible to do lisa.parent.parent....loadn(1)
          lisa.parent.log("Jeez... Main.jsx component's 'log' callback has been called.")}
        }
      >
        &#x25BC;
      </button>
    </th>
  );
};
