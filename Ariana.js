"use strict";

const GOD = "Ariana";

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
    Object.freeze(this); //immutable properties of this!
  }

  //Prop getter
  get parent() {
    return this.prev;
  }

  //LISA Methods
  //LISA wa Ariana no imouto dakara ;) .
  loadn(n) {
    //console.log(`Ariana: call of '${this.i[n]}'`); //debug
    return this.load(this.i[n]);
  }

  load(k) {
    return this.val[k];
  }

  get i() /*i = installed */ {
    return Object.keys(this.val); //todo : verifier que l'ordre est tj conforme a l'ordre des save / sinon Arakiri, mazui kara
  }

  save(k, v) {
    if (!str.valid(k))
      throw `${GOD} can't save new fun: key is not a ${str.toString}!`;
    if (!fun.valid(v))
      throw `${GOD} can't save new fun: value is not a ${fun.toString}!`;
    if (!this.val[k]) this.val[k] = v; //silent ignore if fun already exists for k
    return this;
  }

  addChild() {
    return new Wrapper(this);
  }
}
