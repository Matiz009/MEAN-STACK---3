console.log("Student constructor function called");

const path = require("path");
const pathObj = path.parse("M:day-3\first-node.js");
console.log(pathObj.ext);
console.log(pathObj.name);
console.log(pathObj.root);
console.log(pathObj.dir);
console.log(pathObj.base);
console.log(pathObj);

//os module

const os = require("os"); //importing os module
console.log(os.arch()); //returns the architecture of the operating system

console.log(os.platform()); //returns the platform of the operating system

console.log(os.cpus()); //returns the number of CPU cores in the system

console.log(os.freemem() / 1024 / 1024 / 1024); //returns the amount of free memory in the system

console.log(os.totalmem() / 1024 / 1024 / 1024); //returns the total amount of memory in the system in bytes

//lets convert the memory to GB

console.log(os.homedir()); //returns the home directory of the current user

//fs module

const fs = require("fs"); //importing fs module
console.log(fs); //returns the fs module

const appendFileSync = require("fs"); //importing appendFileSync function from fs module

try {
  appendFileSync(
    "./first-node.js",
    "`console.log('The `data to append` was appended to file!'`"
  ); //appending data to file
  console.log('The "data to append" was appended to file!');
} catch (err) {
  /* Handle the error */
}

//readFileSync function

const { readFileSync } = require("fs"); //importing readFileSync function from fs module
const data = readFileSync("./first-node.js", "utf8"); //reading data from file

console.log(data); //printing data to console

const http = require("http"); //importing http module

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  if (req.url === "/posts") {
    const dummyPosts = [
      { title: "Post 1", body: "This is post 1" },
      { title: "Post 2", body: "This is post 2" },
      { title: "Post 3", body: "This is post 3" },
    ];

    res.setHeader("Content-Type", "application/json"); // JSON response
    res.end(JSON.stringify({ posts: dummyPosts })); // Send JSON
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
  }

  console.log(`Request received: ${req.method} ${req.url}`);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

