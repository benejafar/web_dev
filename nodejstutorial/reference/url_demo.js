const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello?id=100&status=active');

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//host
console.log(myUrl.host);

// host name without port
console.log(myUrl.hostname)

//path name
console.log(myUrl.pathname);

//search 
console.log(myUrl.search)

//search params
console.log(myUrl.searchParams)

//add params
myUrl.searchParams.append('abc','123');

console.log(myUrl.searchParams)

//loop through
myUrl.searchParams.forEach((value, name) => {console.log(`${value} : ${name}`)} )