const cssToJS = require('transform-css-to-js')
const fs = require('fs')
const colors = fs.readFileSync('./styles/design-system/colors.css', {
  encoding: 'utf-8'
})

console.log('colors', cssToJS(colors))
