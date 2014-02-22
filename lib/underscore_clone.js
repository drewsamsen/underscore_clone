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