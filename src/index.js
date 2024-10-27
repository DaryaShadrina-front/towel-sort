module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
      return [];
  }
  return matrix.reduce((acc, cur, i) => {
    return acc.concat((!(i % 2) ? cur : cur.reverse()));
  }, []);
};