// O(1)
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

//O(1)
setPrototype.add = function(item) {
  if (!this._storage[item]) {
    this._storage[item] = item;
  } 
};

//O(1)
setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  } else {
    return false;
  }
};

// O(1)
setPrototype.remove = function(item) {
  if (this._storage[item]) {
    delete this._storage[item];
  }
};