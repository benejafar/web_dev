const path = require('path');


//path name
console.log(path.basename(__filename));

//directory name
console.log(__dirname);


//directory name
console.log(path.dirname(__filename));

console.log(path.extname(__filename));

//to create path object
console.log(path.parse(__filename));

//Concatinate path
console.log(path.join(__dirname,'test','hello.html'));

