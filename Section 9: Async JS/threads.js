const {spawn} = require('child_process')
console.log(spawn('git', ['stuff'])) // spawns a new thread in Node, I think?

// const work = new Worker('somefile') // make a new worker on the browser, won't work in node, will work in browser console
