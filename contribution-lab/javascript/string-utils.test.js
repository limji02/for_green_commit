"use strict";

const assert = require("node:assert/strict");
const {
  normalizeWhitespace,
  countWords,
  capitalizeFirstLetter,
} = require("./string-utils");

assert.equal(
  normalizeWhitespace("  first   open source   contribution  "),
  "first open source contribution"
);

assert.equal(normalizeWhitespace(""), "");
assert.equal(countWords("first open source contribution"), 4);
assert.equal(countWords("   "), 0);

assert.throws(
  () => normalizeWhitespace(null),
  TypeError
);

assert.equal(capitalizeFirstLetter("open source"), "Open source");
assert.equal(capitalizeFirstLetter(""), "");

assert.throws(
  () => capitalizeFirstLetter(null),
  TypeError
);

console.log("JavaScript tests passed.");