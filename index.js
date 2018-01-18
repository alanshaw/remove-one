module.exports = (array, test) => {
  array = Array.from(array)

  const index = array.findIndex(test)
  if (index > -1) array.splice(index, 1)

  return array
}
