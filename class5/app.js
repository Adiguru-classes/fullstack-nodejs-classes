const http = require("http");

// const server = http.createServer((req, res) => {

//     console.log("URL:", req.url);
//     console.log("Method:", req.method);

//     res.end("Response received");

// });


// const server = http.createServer((req, res) => {

//     if (req.url === "/students" && req.method === "GET") {
//         res.end("Get students");
//     }

//     else if (req.url === "/students" && req.method === "POST") {
//         res.end("Create student");
//     }

//     else {
//         res.end("Route not found");
//     }

// });


const server = http.createServer((req, res) => {

    if (req.url === "/students" && req.method === "GET") {

        const students = [
            { id: 1, name: "Raj" },
            { id: 2, name: "Ravi" }
        ];

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(students)
        // res.end(JSON.stringify(students));

    }

    else {
        res.statusCode = 404;
        res.end("Route not found");
    }

});




server.listen(3000, () => {
    console.log("Server running on port 3000");
});