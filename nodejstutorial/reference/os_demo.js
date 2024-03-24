const os = require('os');
console.log(os.platform());

//architecture
console.log(os.arch());

//number of cpu core
console.log(os.cpus());

//amount of free memory
console.log(os.freemem());

//amount of total memory
console.log(os.totalmem());

// home directory
console.log(os.homedir());