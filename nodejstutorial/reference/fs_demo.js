const fs = require("fs");
const path = require("path");

// create file
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if (err) throw err;
//     console.log('folder created');
// })

// create and write to file

// fs.writeFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "Hello World!",
//   {},
//   (err) => {
//     if (err) throw err;
//     console.log("file written");

//     //append
//     fs.appendFile(
//         path.join(__dirname, "test", "hello.txt"),
//         "I love nodes",
//         {},
//         (err) => {
//           if (err) throw err;
//           console.log("file written");
//         }
//       );

//   }
// );

//read file
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//rename file

fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("file name changes successfully..");
  }
);
