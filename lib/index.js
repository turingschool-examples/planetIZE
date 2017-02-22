'use strict'

const fs = require('fs')
const readData = require('./read_data.js')
const parseData = require('./parse_data.js')
const calculateData = require('./calculate_data.js')
console.time('entire process')

let planetData = parseData(readData('./data/planets.csv'))
// let planetCount = calculateData(planetData)
// console.log(planetData)

console.timeEnd('entire process')

module.exports = planetData
