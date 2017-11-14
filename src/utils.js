
/**
 * Remove select keys from an object
 * @param {Object} obj
 * @param {Array} keys
 */
export const omit = (obj, keys) => {
  const newObj = {
    ...obj
  };

  keys.forEach((key) => {
    delete newObj[key];
  });

  return newObj;
};
