function isAscending(array) {
  if (array.length === 0) return [];
  return array
    .slice(1)
    .map((e, i) => e > array[i])
    .every((x) => x);
}
module.exports = isAscending;
