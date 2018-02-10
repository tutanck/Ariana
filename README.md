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

3. Load any callback from a child component using the 'wrapper' passed via 'props'.

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
// add a child wrapper to handle callbacks of this child (Table component)
    lisa = ariana
      .addChild()
      .save("handleSorting", newSort => this.setState(newSort))
      .save("log", () =>
        ariana.loadn(1)( //overload parent's 'log' callback function
          "Wow... Table/index.jsx component's 'log' callback has been called."
        )
      );
```

5. Acces a grand parent callbacks by using the wrapper's 'parent' getter.

```JavaScript
<button onClick={() => {
    lisa.loadn(0)/*load the callback n°0 from the parent component*/({
      sort: {
        by: column,
        asc: !true
      }
    })
    /*load the callback n°1 from the grand parent component*/
    //it could be possible to do lisa.parent.parent....loadn(1)
    lisa.parent.loadn(1)("Jeez... Main.jsx component's 'log' callback has been called.")}
  }
>
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

2. Trying to directly modify a wrapper throws an error :

```JavaScript
ariana = Ariana();
ariana.foo = 'bar';
```

3. You can access a wrapper's callbacks name array by calling the getter 'i' on it.

```JavaScript
ariana = Ariana()
 .save("handleFiltering", filterInput => this.setState(filterInput))
 .save("log", s => console.log(s))
 //trying to override 'handleFiltering' does nothing!
 .save("handleFiltering", () => console.log("Will never be called!"));
 console.log(ariana.i); //-> ["handleFiltering","log"]
```

#### Example

> [see the full example here](https://github.com/tutanck/Ariana/tree/master/example)
