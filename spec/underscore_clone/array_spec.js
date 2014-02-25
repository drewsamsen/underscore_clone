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

describe("_.reduceRight", function() {
});

describe("_.find", function() {
  it("returns the first that passes truth test (predicate)", function() {
    var arr = [1, 3, 7, 6, 11, 2],
        found,
        predicate = function(num) { return num % 2 === 0; };
    found = _.find(arr, predicate);
    expect(found).toEqual(6);
  });
});

describe("_.filter", function() {
  it("returns subset of collection that passes truth test (predicate)", function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 12],
        matches = [],
        predicate = function(num) { return num % 2 === 0; };

    matches = _.filter(arr, predicate);
    expect(matches).toEqual([2, 4, 6, 8, 12]);
  });
});

describe("_.where", function() {
  it("returns subset of collection with matching object properties", function() {
    var books = [
      { type: "fiction", name: "The Road"},
      { type: "nonfiction", name: "Seneca"},
      { type: "fiction", name: "1984"},
      { type: "nonfiction", name: "Antifragile"}
    ],
        fiction = [
      { type: "fiction", name: "The Road"},
      { type: "fiction", name: "1984"},
    ],
        found;

    found = _.where(books, {type: "fiction"});
    expect(found).toEqual(fiction);
  });

  it("handles multiple property criteria", function() {
    var books = [
      { type: "fiction", name: "The Road"},
      { type: "nonfiction", name: "Seneca"},
      { type: "fiction", name: "1984"},
      { type: "nonfiction", name: "Antifragile"}
    ],
        found;

    found = _.where(books, {type: "fiction", name: "The Road"});
    expect(found).toEqual( [{ type: "fiction", name: "The Road"}] );
  });

});

describe("_.all", function() {
  it("checks if all elements in a collection pass a predicate", function() {
    var even = [2, 4, 6, 12, 34],
        predicate = function(num) { return num % 2 === 0; },
        result;
    result = _.all(even, predicate);
    expect(result).toEqual(true);
  });

  it("fails if all elements do not pass predicate", function() {
    var even = [2, 4, 7, 12, 34],
        predicate = function(num) { return num % 2 === 0; },
        result;
    result = _.all(even, predicate);
    expect(result).toEqual(false);
  });

});

describe("_.findWhere", function() {
  it("returns the first value that matches all of the key-value pairs listed in properties", function() {
    var books = [
      { type: "fiction", name: "The Road"},
      { type: "nonfiction", name: "Seneca"},
      { type: "fiction", name: "1984", author: "Orwell"},
      { type: "nonfiction", name: "Antifragile"}
    ],
        properties = { type: "fiction", name: "1984" },
        found;

    found = _.findWhere(books, properties);
    expect(found).toEqual( { type: "fiction", name: "1984", author: "Orwell"} );
  });
});