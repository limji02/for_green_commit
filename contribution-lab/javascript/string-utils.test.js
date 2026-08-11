"use strict";

const assert = require("node:assert/strict");
const {
  normalizeWhitespace,
  countWords,
  isBlank,
  capitalizeFirstLetter,
} = require("./string-utils");

assert.equal(
  normalizeWhitespace("  first   open source   contribution  "),
  "first open source contribution"
);

assert.equal(
  normalizeWhitespace("\tfirst\nopen   source\tcontribution\n"),
  "first open source contribution"
);

assert.equal(normalizeWhitespace(""), "");
// countWords edge case coverage.
assert.equal(countWords("first open source contribution"), 4);
assert.equal(countWords("   "), 0);

assert.throws(
  () => normalizeWhitespace(null),
  TypeError
);

assert.equal(isBlank(""), true);
assert.equal(isBlank("   "), true);
assert.equal(isBlank("\t\n"), true);
assert.equal(isBlank("hello"), false);

assert.throws(
  () => isBlank(null),
  TypeError
);

assert.equal(capitalizeFirstLetter("open source"), "Open source");
assert.equal(capitalizeFirstLetter(""), "");
assert.equal(capitalizeFirstLetter("Open source"), "Open source");

assert.throws(
  () => capitalizeFirstLetter(null),
  TypeError
);

console.log("JavaScript tests passed.");