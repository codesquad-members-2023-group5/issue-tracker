const isObject = (object) => {
  return object != null && typeof object === 'object';
};

const isEqualObj = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i += 1) {
    const key = keys1[i];
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (isObject(val1) && isObject(val2)) {
      if (!isEqualObj(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

export { isEqualObj };
