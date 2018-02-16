# Ariana : React helper to ease passing parent components callbacks down to their children.

* Ariana ease passing components callbacks down to their children in a react application.

## Installation

`npm install --save ariana`

## Usage

```JavaScript
import Ariana from 'ariana';
```

1. Create a 'callbacks object' (an object that contains all component's callbacks) : 

```JavaScript
//In Main.jsx
const mainCallbacks = {
  handleFiltering: filterInput => this.setState(filterInput),
  log: s => alert(s)
};
```

2. Instantiate a new root wrapper with the callbacks object by calling Ariana :

```JavaScript
//In Main.jsx
const wrapper = Ariana(mainCallbacks);
```

3. Pass the 'wrapper' to children components using 'props' :

```JavaScript
//In Main.jsx
<Filters
   text={this.state.filterText}
   stockOnly={this.state.inStockOnly}
   ariana={wrapper}
   />
```

3. Use any callback in a child component using the 'wrapper' passed via 'props' :

```JavaScript
//In Filters.jsx
const { ariana } = this.props;

ariana.handleFiltering({
  filterText: "Ariana"
});
```

4. Overload parent callbacks behaviour by adding new callbacks functions at each stage of the react-app's components tree:

```JavaScript
//In Table/index.jsx
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

//pass lisa via props to this component's child (Header.jsx)
<Header lisa={lisa} />
```

5. Acces a grand parent callbacks by using the wrapper's 'parent' getter:

```JavaScript
//In Header.jsx
<button
  onClick={() => {
    /*use the the parent component's callback*/
    lisa.handleSorting({
      sort: {
        by: column,
        asc: !true
      }
    });
    /*use the the grand parent component's callback*/
    lisa.parent.log(
      "Jeez... Main.jsx component's 'log' callback has been called."
    ); //it could be possible to do lisa.parent.parent.[...].log()
  }}
>
```

## Limitation

* You can use any key name in callback objects except the names reserved by Ariana : `'child'`, `'parent'`, `'val'` and `'eject'` which are functions names of the wrapper.

### Example

> [See the full example here.](https://github.com/tutanck/Ariana/tree/master/example)
