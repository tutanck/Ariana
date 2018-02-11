"use strict";

const namae = "Ariana";

//Handler
export default () => new Wrapper();

//Type
const fun = {
  valid: arg => arg != null && typeof arg === "function",
  toString: "function"
};

const str = {
  valid: arg => arg != null && typeof arg === "string",
  toString: "string"
};

//Wrapper
class Wrapper {
  constructor(prev) {
    this.prev = prev;
    this.val = {};
    this.orderedFunNames = [];
    Object.freeze(this); //immutable properties of this!
  }

  //Prop getter
  get parent() {
    return this.prev;
  }

  //LISA Methods -> //LISA wa Ariana no imouto dakara ;) .
  loadn(n) {
    //console.log(`Ariana: call of '${this.i[n]}'`); //debug
    return this.load(this.i[n]);
  }

  load(k) {
    return this.val[k];
  }

  get i() /*i = installed */ {
    return this.orderedFunNames;
  }

  save(k, v) {
    if (!str.valid(k))
      throw `${namae} can't save new fun: key is not a ${str.toString}!`;
    if (!fun.valid(v))
      throw `${namae} can't save new fun: value is not a ${fun.toString}!`;
    if (!this.val[k]) /*silent ignore if fun already exists for k*/ {
      this.val[k] = v;
      this.orderedFunNames.push(k);
    }
    return this;
  }

  addChild() {
    return new Wrapper(this);
  }
}
