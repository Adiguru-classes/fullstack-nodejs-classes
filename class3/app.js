//fs module-inbuilt module of nodejs

//create the file-
// const fs = require("fs"); //fs=file sysytem module
// fs.writeFileSync("students.txt", "Raj\nRavi\nKiran");
// console.log("File created");

//read the file
// const fs = require("fs");
// const data = fs.readFileSync("students.txt", "utf8");

// console.log(data);

//add more data
// const fs = require("fs");

// fs.appendFileSync("students.txt", "\nKiran");

// console.log("Student added");

//delete the file
// const fs = require("fs");

// fs.unlinkSync("students.txt");

// console.log("File deleted");

//path module-inbuilt module of nodejs
//npm install path
// const path = require("path");

// const filePath = path.join("students", "data", "students.txt");

// console.log(filePath);

//it will create only file isnide anually created folder
// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "data", "studentss.txt");//studentss.tct will go directly inside data folderrt,if data folder doesnt exists it throws an error

// fs.writeFileSync(filePath, "Raj\nRavi\nKiran");

// console.log("File created");


//create folder and file 
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "rajkumar");

fs.mkdirSync(dataFolder, { recursive: true });

const filePath = path.join(dataFolder, "studentss.txt");

fs.writeFileSync(filePath, "Raj\nRavi\nKiran");

console.log("File created");

// path.join()-ONLY constructs the path
// fs.mkdirSync()-Creates the folder
// fs.writeFileSync()-Creates/writes the file