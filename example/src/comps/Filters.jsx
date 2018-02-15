import React from "react";

export default ({ text, stockOnly, ariana }) => {
  const handeleEvent = e => {
    
    ariana._.handleFiltering({
      [e.target.name]:
        e.target[e.target.type === "checkbox" ? "checked" : "value"]
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          name="filterText"
          onChange={handeleEvent}
        />
      </div>

      <div>
        <input
          type="checkbox"
          checked={stockOnly}
          name="inStockOnly"
          onChange={handeleEvent}
        />
        <span>Only show product in stock</span>
      </div>
    </div>
  );
};
