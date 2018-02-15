"use strict";

const kimiNoNaWa = "Ariana";

//Type checking
const isObj = arg =>
  arg != null && typeof arg === "object" && !Array.isArray(arg);

const isFun = arg => arg != null && typeof arg === "function";

const isStr = arg => arg != null && typeof arg === "string";

const msg = `${kimiNoNaWa} : 'callbacksObject' must be an Object with a function as value for each key.`;

//Wrapper
class Wrapper {
  constructor(callbacksObject, parent) {
    if (!isObj(callbacksObject)) throw msg;

    this.val = { ...callbacksObject }; //internal shallow copy

    Object.keys(this.val).forEach(k => {
      if (!(isStr(k) && isFun(this.val[k]))) throw msg;
    });

    this.parent = parent;

    Object.freeze(this.val); //immutable internal callbacks handler!
    Object.freeze(this); //immutable properties of this!
  }

  get _() {
    return this.val;
  }

  child(callbacksObject) {
    return new Wrapper(callbacksObject, this);
  }
}

export default o => new Wrapper(o);
