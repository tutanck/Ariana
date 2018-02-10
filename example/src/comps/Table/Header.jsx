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
          lisa.loadn(0)({
            sort: {
              by: column,
              asc: true
            }
          })
          lisa.loadn(1)("This text won't be displayed!")
         }
        }
      >
        &#x25B2;
      </button>
      <button
        className={by === column && !asc ? "ProductTableHeader-current" : ""}
        onClick={() => {
          lisa.loadn(0)({
            sort: {
              by: column,
              asc: !true
            }
          })
          //it could be possible to do lisa.parent.parent....loadn(1)
          lisa.parent.loadn(1)("Jeez... Main.jsx component's 'log' callback has been called.")}
        }
      >
        &#x25BC;
      </button>
    </th>
  );
};
