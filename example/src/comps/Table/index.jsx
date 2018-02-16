import React, { Component } from "react";
import Header from "./Header";
import Row from "./Row";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        by: "name",
        asc: true
      }
    };
  }

  render() {
    const { ariana } = this.props;

    const tableCallbacks = {
      handleSorting: newSort => this.setState(newSort),
      log: () =>
        ariana.log(
          "Wow... Table/index.jsx component's 'log' callback has been called."
        ) //overload parent's 'log' callback
    };

    //add a child wrapper to handle callbacks of this child component
    const lisa = ariana.child(tableCallbacks);

    const sortF = (a, b) => {
      const { by, asc } = this.state.sort;
      let order;

      if (by === "name") order = a.name.localeCompare(b.name);
      else if (by === "price") order = a.price > b.price ? 1 : -1;
      return order * (asc ? 1 : -1);
    };

    const { products, stockOnly, filter } = this.props;

    const filteredProducts = Object.values(products)
      .filter(p => (stockOnly ? p.stocked : true))
      .filter(p => (filter !== "" ? p.name.indexOf(filter) > -1 : true))
      .sort(sortF);

    return (
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <Header column={"name"} sort={this.state.sort} lisa={lisa} />
            <Header column={"price"} sort={this.state.sort} lisa={lisa} />
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map(p => <Row key={p.id} product={p} />)}
        </tbody>
      </table>
    );
  }
}

export default Table;
