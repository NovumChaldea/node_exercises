//OS modules
//To operate the system

const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the sistem uptime in seconds

console.log(`The system uptime is ${os.uptime}`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmemory:os.totalmem(),
    freeMemory:os.freemem()
}

console.log(currentOs)