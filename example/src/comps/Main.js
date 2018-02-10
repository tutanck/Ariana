import React, { Component } from "react";
import Filters from "./Filters";
import Form from "./Form";
import Table from "./Table";
import PRODUCTS from "../data/PRODUCTS";
import Ariana from "../utils/Ariana";

let ariana;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };

    ariana = Ariana()
      .save("handleFiltering", filterInput => this.setState(filterInput))
      .save("log", s => console.log(s))
      //trying to override the 'handleFiltering' does nothing
      .save("handleFiltering", () => console.log("Will never be called!"));
  }

  render() {
    return (
      <div className="App">
        <Filters
          text={this.state.filterText}
          stockOnly={this.state.inStockOnly}
          ariana={ariana}
        />
        <Table
          products={PRODUCTS}
          filter={this.state.filterText}
          stockOnly={this.state.inStockOnly}
          ariana={ariana}
        />
        <Form />
      </div>
    );
  }
}

export default Main;
