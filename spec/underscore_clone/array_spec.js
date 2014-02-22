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