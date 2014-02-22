// Array specs

describe("_.each", function() {
  it("iterates over an array calling a function for each item", function() {
    var arr = [1, 2, 3],
        memo = [],
        iterator = function(value) { memo.push(value); };

    _.each(arr, iterator);

    expect(memo).toEqual([1, 2, 3]);
  });
});

describe("_.map", function() {
  it("produces a new array of values by mapping each value in a list through a function", function() {
    var arr = [1, 2, 3],
        iterator = function(value) { return value * 3; };
    _.map(arr, iterator);

    expect(arr).toEqual([3, 6, 9]);
  });
});

describe("_.reduce", function() {
  it("boils down a list of values into a single value", function() {
    var arr = [1, 2, 3],
        sum,
        iterator = function(memo, num) { return memo + num; };

    sum = _.reduce(arr, iterator, 0);
    expect(sum).toEqual(6);
  });
});