//Common JS, every file is module (by default)
//Modules - Encapsulated Code (only share minimun)

const names = require("./4-names")
const sayHi = require("./5-util")
const data = require("./6-alternative-flavor")
require("./7-mind-granade")


sayHi("susan")
sayHi(names.john)
sayHi(names.peter)