import React, { Component } from "react";
import Filters from "./Filters";
import Form from "./Form";
import Table from "./Table";
import PRODUCTS from "../data/PRODUCTS";
//import Ariana from "ariana";
import Ariana from "../Ariana";

let ariana;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };

    //ariana.val = "3"//debug*/ //move in UT

    ariana = Ariana({
      handleFiltering: filterInput => this.setState(filterInput),
      log: s => console.log(s)
    });
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
