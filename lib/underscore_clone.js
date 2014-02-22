var _ = {};

_.each = function(collection, iterator) {
  var index, length;
  for (index = 0, length = collection.length; index < length; index++) {
    iterator.call({}, collection[index]);
  }
};