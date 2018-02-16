import React, { Component } from "react";
import Filters from "./Filters";
import Form from "./Form";
import Table from "./Table";
import PRODUCTS from "../data/PRODUCTS";
import Ariana from "ariana";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };
  }

  render() {
    const mainCallbacks = {
      handleFiltering: filterInput => this.setState(filterInput),
      log: s => alert(s)
    };

    const wrapper = Ariana(mainCallbacks);

    return (
      <div className="App">
        <Filters
          text={this.state.filterText}
          stockOnly={this.state.inStockOnly}
          ariana={wrapper}
        />
        <Table
          products={PRODUCTS}
          filter={this.state.filterText}
          stockOnly={this.state.inStockOnly}
          ariana={wrapper}
        />
        <Form />
      </div>
    );
  }
}

export default Main;
