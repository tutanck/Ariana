# Ariana : React helper to ease passing parent components callbacks down to their children.

* Ariana ease passing components callbacks down to their children in a react application.


## Installation

`npm install --save ariana`


## Usage

```JavaScript
import Ariana from 'ariana';
```

1. Save as many callbacks as you want from the parent component into a callbacks 'wrapper' object.

```JavaScript
//In the Main.js component
const wrapper = Ariana()
  .save('handleFiltering',filterInput => this.setState(filterInput))
  .save('log',x => console.log(x));
```

2. Pass the 'wrapper' to children components using 'props'.

```JavaScript
//In the Filters.js component
<Filters
   text={this.state.filterText}
   stockOnly={this.state.inStockOnly}
   ariana={wrapper}
   />
```

3. Load any callback from a child component

```JavaScript
//In the Filters.js component

//using the callback's name
ariana.load('handleFiltering')({
      filterText: "Ariana"
    });

//Or using the callback's number
ariana.loadn(0)({
      filterText: "Ariana"
    });
```

4. Overload parent callbacks behaviour by adding new callbacks functions at each stage of the react-app's components tree.

```JavaScript
const lisa = ariana
      .addChild()
      .save("handleFiltering", () => ariana.loadn(0)({
      filterText: "Lisa"
    }))
      .save("log", () => ariana.loadn(1)("log overload!"));
```


##### Good-to-know

1. Trying to override a callback function does nothing:


```JavaScript
ariana = Ariana()
 .save("handleFiltering", filterInput => this.setState(filterInput))
 .save("log", s => console.log(s))
 //trying to override 'handleFiltering' does nothing!
 .save("handleFiltering", () => console.log("Will never be called!"));
```


#### Example

> [see the full example here](https://github.com/tutanck/Ariana/tree/master/example)
