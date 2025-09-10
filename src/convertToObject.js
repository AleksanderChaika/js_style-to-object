'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const toArr = sourceString.split(';');
  const result = {};

  for (const ch of toArr) {
    const trimmed = ch.trim();

    if (!trimmed) {
      continue;
    }

    const [prop, value] = trimmed.split(':');

    if (prop && value) {
      result[prop.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
