# remove-one

[![Build Status](https://travis-ci.org/alanshaw/remove-one.svg?branch=master)](https://travis-ci.org/alanshaw/remove-one)
[![dependencies Status](https://david-dm.org/alanshaw/remove-one/status.svg)](https://david-dm.org/alanshaw/remove-one) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Fast remove a single element from an array

Using `Array.filter` you iterate over the whole array to remove just a single item. This module uses `Array.findIndex` to find the item you want to remove and `Array.splice` to remove it. Returns a new array.

## Install

```sh
npm install remove-one
```

## Usage

```js
const removeOne = require('remove-one')
const array = [0, 1, 2, 3]
const result = removeOne(array, (n) => n === 1)

console.log(array) // [0, 1, 2, 3]
console.log(result) // [0, 2, 3]
```
