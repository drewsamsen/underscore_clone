var _ = {};

_.each = function(collection, iterator) {
  var index, length;
  for (index = 0, length = collection.length; index < length; index++) {
    iterator.call({}, collection[index]);
  }
};

_.map = function(collection, iterator) {
  var index, length;
  for (index = 0, length = collection.length; index < length; index++) {
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