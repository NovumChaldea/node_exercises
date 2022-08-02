const path = require('path');




console.log(path.sep)


const filepatch = path.join('/content', 'subfolder', 'test.txt')

console.log(filepatch)

const base = path.basename(filepatch)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)