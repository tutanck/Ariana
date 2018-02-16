"use strict";

const kimiNoNaWa = "Ariana";

//Type checking
const isObj = arg =>
  arg != null && typeof arg === "object" && !Array.isArray(arg);

const isFun = arg => arg != null && typeof arg === "function";

const isStr = arg => arg != null && typeof arg === "string";

const msg = `${kimiNoNaWa} : the 'callbacks object' must be an Object with a function as value for each key.`;
const msg2 = `${kimiNoNaWa} : wtf : a wrapper is a read-only object!`;

//Proxy
const proxyfy = wrapper =>
  new Proxy(wrapper, {
    get: function(target, prop) {
      if (prop === "child") return target.child;
      if (prop === "parent") return target.parent;
      if (prop === "val") return target.val; 
      if (prop === "eject") return target.eject;
      return prop in target.val ? target.val[prop] : undefined;
    },
    set: function(target, name, value) {
      throw msg2;
    }
  });

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

  child(callbacksObject) {
    return proxyfy(new Wrapper(callbacksObject, this));
  }

  eject() {
    return { ...this.val };
  }
}

export default o => proxyfy(new Wrapper(o));
