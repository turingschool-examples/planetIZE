'use strict'

const fs = require('fs');

module.exports = (data) => {
  return fs.readFileSync(data)
            .toString()
            .split(`\n`)
            .map(row => row.split(','))
}
