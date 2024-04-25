const fs = require("fs");
const os = require("os")

console.log(os.cpus().length)


// console.log(fs)

//Sync.... Blocking
// fs.writeFileSync('./test.txt', 'Hey there');

// Async.....Non-Blocking
// fs.writeFile('./test.txt','Hello World Async' ,(err=>{}))

// const res = fs.readFileSync('./contact.txt', "utf-8")
// console.log(res)

// fs.readFile("./contact.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.log("err", err);
//   } else {
//     console.log(res);
//   }
// });

// fs.appendFileSync("test.txt", `${Date.now()} Hey There\n`)
// fs.cpSync("./test.txt","./copy.txt")

// fs.unlinkSync("./copy.txt")
// console.log((fs.statSync("./test.txt")))



