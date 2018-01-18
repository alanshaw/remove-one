const Assert = require('assert')
const removeOne = require('./')

const tests = {
  'should remove a single item' () {
    const length = 1000000
    const array = createArray(length)
    const removeId = 'ID500000'
    const test = item => item.id === removeId

    const res = removeOne(array, test)

    Assert.equal(res.length, length - 1, 'one element was removed')
    res.forEach(i => Assert.notEqual(i.id, removeId, `${i.id} not equal to ${removeId}`))
    Assert.notStrictEqual(res, array, 'array was copied')
  },

  'should not remove an item if not found' () {
    const length = 1000000
    const array = createArray(length)
    const removeId = 'JUNK'
    const test = item => item.id === removeId

    const res = removeOne(array, test)

    Assert.equal(res.length, length, 'no elements removed')
    Assert.notStrictEqual(res, array, 'array was copied')
  }
}

Object.keys(tests).forEach((name) => {
  try {
    tests[name]()
  } catch (err) {
    console.log(`✗ ${name}`)
    throw err
  }

  console.log(`✓ ${name}`)
})

function createArray (length = 1000000) {
  return Array(1000000).fill(0).map((_, i) => ({ id: `ID${i}` }))
}
