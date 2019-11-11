export const getItem = key => window.localStorage.getItem(key);

export const getObject = key => {
  const result = getItem(key);
  try {
    return JSON.parse(result);
  } catch (e) {
    return result;
  }
};
