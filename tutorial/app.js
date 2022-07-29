//Globals

//__dirname -path to current directory
//filename - file name
//  - funtion to use modules
//module - info about current module
//process - info about env where the program is being executed
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade')


sayHi('Chaldea')
sayHi(names.john)
sayHi(names.peter)