const express = require("express");

const app = express();

const students = [
    { id: 1, name: "Raj", age: 22 },
    { id: 2, name: "Ravi", age: 21 },
    { id: 3, name: "Kiran", age: 23 },
    { id: 4, name: "Arjun", age: 20 }
];

app.get("/", (req, res) => {
    res.send("Express server is working");
});

// 1. GET all students
app.get("/students", (req, res) => {
    res.json(students);
});


// 2. GET one particular student with dynamic route and route  parameter
app.get("/students/:id", (req, res) => { //dynamic route - :id is route parameter and it is  special,it means the value at this position can change
console.log(req.params.id);
    const id = Number(req.params.id);//the URL is fundamentally string/text so it converts taht string to number
    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

//query parameter example-req.query Values come after ?:
app.get("/search", (req, res) => {

    console.log(req.query);
    res.json(req.query);//we will get whatever we give for route as query parameter /search?name=raj&age=30
    // res.json(req.query.name)
});




// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});