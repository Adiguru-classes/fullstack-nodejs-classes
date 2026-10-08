const express = require("express");

const app = express();

// Middleware to read JSON request bodies
app.use(express.json());


// Temporary data stored in server memory
const students = [
    { id: 1, name: "Ravi", age: 21, course: "Java" },
    { id: 2, name: "Kiran", age: 23, course: "MERN" }
];


// GET all students
app.get("/students", (req, res) => {
    res.json(students);
});


// POST - create a new student
app.post("/students", (req, res) => {

    console.log("Request body:", req.body);

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,  
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

//http://localhost:3000/students- GET
//http://localhost:3000/students/1-GET
//http://localhost:3000/students/99-GET

//http://localhost:3000/students-post