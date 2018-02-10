import React from "react";
import "./Row.css";

export default ({ product }) => {
  return (
    <tr>
      <td>
        <span className={product.stocked ? "" : "ProductRow-out-of-stock"}>
          {product.name}
        </span>
      </td>
      <td>${product.price}</td>
      <td>
        <button onClick={this.destroy} style={{ color: "red" }}>
          x
        </button>
      </td>
    </tr>
  );
};
