// CommonJS is the require and module.exports pattern
const {module1, moduleFunction} = require('./CommonJS-module')
console.log(module1)
console.log(moduleFunction(module1, 5))

// AMD (Asynchronous Module Definition) was used for the browser
// define is not declared?
// define(['moduleAMD1', 'moduleAMD2'],
//   function (moduleAMD1Import, moduleAMD2Import) {
//     const moduleAMD1 = moduleAMD1Import
//     const moduleAMD2 = moduleAMD2Import
//     function doStuff () {
//       return moduleAMD2 + moduleAMD1
//     }
//     return {
//       doStuff
//     }
//   })
