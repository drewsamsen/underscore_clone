var _ = {};

_.each = function(collection, iterator) {
  var index, length = collection.length;
  for (index = 0; index < length; index++) {
    iterator.call({}, collection[index]);
  }
};

_.map = function(collection, iterator) {
  var index, length = collection.length;
  for (index = 0; index < length; index++) {
    collection[index] = iterator.call({}, collection[index]);
  }
};

// This is dependent on _.each now...
_.reduce = function(collection, iterator, memo, context) {
  _.each(collection, function(value, index, list) {
    memo = iterator.call(context, memo, value, index, list);
  });
  return memo;
};


// The right-associative version of reduce
// _.reduceRight = function(...) {};


_.find = function(collection, predicate, context) {
  var index,
      length = collection.length;
  for (index = 0; index < length; index++) {
    if (predicate.call(context, collection[index], index, collection)) {
      return collection[index];
    }
  }
};

_.filter = function(collection, predicate, context) {
  var index,
      matches = [],
      length = collection.length;
  for (index = 0; index < length; index++) {
    if (predicate.call(context, collection[index], index, collection)) {
      matches.push(collection[index]);
    }
  }
  return matches;
};

_.where = function(collection, criteria) {
  return _.filter(collection, _.matches(criteria));
};

_.findWhere = function(collection, criteria) {
  return _.find(collection, _.matches(criteria));
};

_.reject = function(collection, predicate, context) {
  var index,
      matches = [],
      length = collection.length;
  for (index = 0; index < length; index++) {
    if (!(predicate.call(context, collection[index], index, collection))) {
      matches.push(collection[index]);
    }
  }
  return matches;
};

// Added for help out with other functions. Does a check to see if all elements
// in a collection pass a ctrieria check
_.every = function(collection, predicate, context) {
  var index,
      length = collection.length;

  for (index = 0; index < length; index++) {
    if (!(predicate.call(context, collection[index], index, collection))) {
      return false;
    }
  }
  return true;
};

_.some = function(collection, predicate, context) {
  return ( _.find(collection, predicate, context) !== undefined );
};

_.contains = function(collection, testValue) {
  return _.some(collection, function(value) {
    return value === testValue;
  });
};

// ===============
// HELPER METHODS
// ===============

// Returns a predicate for checking whether an object has a given set of
// key:value pairs.
_.matches = function(attr, context) {
  return function(context) {
    for (var prop in attr) {
      if (context[prop] !== attr[prop])
        return false;
      }
    return true;
  };
};