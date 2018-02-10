import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <h3>Enter a new product</h3>

        <p>
          <label>
            Name
            <br />
            <input type="text" />
          </label>
        </p>

        <p>
          <label>
            Category
            <br />
            <input type="text" />
          </label>
        </p>

        <p>
          <label>
            Price
            <br />
            <input type="text" />
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" />
            In stock?
          </label>
        </p>

        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default Form;
