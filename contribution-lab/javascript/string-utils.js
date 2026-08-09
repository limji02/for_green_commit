"use strict";

/**
 * 문자열 앞뒤의 공백을 제거하고 연속된 공백을 하나로 합칩니다.
 *
 * @param {string} text
 * @returns {string}
 */
function normalizeWhitespace(text) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  return text.trim().replace(/\s+/g, " ");
}

/**
 * 문자열에 포함된 단어 수를 반환합니다.
 *
 * @param {string} text
 * @returns {number}
 */
function countWords(text) {
  const normalized = normalizeWhitespace(text);

  if (normalized === "") {
    return 0;
  }

  return normalized.split(" ").length;
}

/**
 * 문자열의 첫 글자만 대문자로 변환합니다.
 *
 * @param {string} text
 * @returns {string}
 */
function capitalizeFirstLetter(text) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  if (text === "") {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

module.exports = {
  normalizeWhitespace,
  countWords,
  capitalizeFirstLetter,
};