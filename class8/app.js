const express = require("express");

const app = express();

// Middleware to read JSON request bodies
app.use(express.json());


// Temporary data stored in server memory

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

// PUT - replace a student's data
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id); //req.params.id gets the ID from the URL, such as /students/1.

    const index = students.findIndex(
        student => student.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const updatedStudent = {
        id: id,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students[index] = updatedStudent;

    res.json(updatedStudent);
});

// PATCH - update selected fields-partially update
app.patch("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    if (req.body.name !== undefined) {
        student.name = req.body.name;
    }

    if (req.body.age !== undefined) {
        student.age = req.body.age;
    }

    if (req.body.course !== undefined) {
        student.course = req.body.course;
    }

    res.json(student);
});

// DELETE - remove a student
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(
        student => student.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);//It removes one element from the array at the specified index.

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

//http://localhost:3000/students- GET
//http://localhost:3000/students/1-GET
//http://localhost:3000/students/99-GET

//http://localhost:3000/students-post
//http://localhost:3000/students/1 -PUT request