# Ariana : React helper to ease passing parent components callbacks down to their children.

* Ariana ease passing components callbacks down to their children in a react application.


## Installation

* `npm install --save ariana`


## Usage

> `import Ariana from 'ariana';`

1. Save as many callbacks as you want from the parent component into a 'callbacksWrapper' object.

```
//In the Main.js component
const wrapper = Ariana()
  .save('handleFiltering',filterInput => this.setState(filterInput))
  .save('log',x => console.log(x));
```

2. Pass the 'callbacksWrapper' to children components using 'props'.

```
//In the Filters.js component
<Filters
          text={this.state.filterText}
          stockOnly={this.state.inStockOnly}
          ariana={wrapper}
        />
```

3. Load any callback from a child component:

```
//In the Filters.js component

//using the function name
ariana.load('handleFiltering')({
      filterText: "Ariana"
    });

//Or using the function number
ariana.loadn(0)({
      filterText: "Ariana"
    });
```

4. Overload parent callbacks behaviour by adding new callbacks functions at each stage of the react-app's components tree.

```
const lisa = ariana
      .addChild()
      .save("handleFiltering", () => ariana.loadn(0)({
      filterText: "Lisa"
    }))
      .save("log", () => ariana.loadn(1)("log overload!"));
```


##### Good-to-know

1. Trying to override the 'handleFiltering' function does nothing:


```
ariana = Ariana()
 .save("handleFiltering", filterInput => this.setState(filterInput))
 .save("log", s => console.log(s))
 //trying to override 'handleFiltering' does nothing!
 .save("handleFiltering", () => console.log("Will never be called!"));
```


#### Example

> [see the full example here](https://github.com/tutanck/Ariana/tree/master/example)