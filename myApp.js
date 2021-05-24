const express = require('express');
const app = express();

//==================================================> Solution Start with a working express server

/*
app.get("/", (req, res) => {
    res.send("test")
})
*/

//==================================================> Solution Serve an HTML file
/*
app.get("/", (req, res) => {

    const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath);
})
*/
//==================================================> Solution Serve static Assets

//app.use('/public', express.static(__dirname + "/public"))

//==================================================> Solution Serve JSON on a Specific Route
/*
app.get("/json", (req, res) => {
    const jsonObj = { "message": "Hello json" };
    res.json(jsonObj);
})
*/
//==================================================> Solution Use the env. File

/*
require('dotenv').config();
app.get("/json", (req, res) => {
    let response = "Hello json"

    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = response.toUpperCase();
        console.log(response);
    }

    res.json({ "message": response });
})
*/

//==================================================> Solution Implement a Root-level Request Logger MiddleWare  
/*
app.use((req, res, next) => {
    const method = req.method;
    const path = req.path;
    const ip = req.ip;
    const result = `${method} ${path} ${ip}`;
    console.log(result);
    next();
})
*/

//==================================================> Solution Chain Middleware to Create a time Server

app.get("/now", (req, res, next) => {
    let timeNow = new Date();
    timeNow = timeNow.toString();
    req.time = timeNow;
    next();
}, (req, res) => {
    const jsonTime = { "time": req.time };
    res.json(jsonTime);
})

//==================================================> Solution Get Route Paramater Input from the client

app.get("/:word/echo", (req, res) => {
    const ans = req.params.word;
    res.json({ "word": ans });
})


//==================================================> Solution Get query parameter input from the client

app.get("/name", (req, res) => {
    const firstName = req.query.firstname;
    const lastName = req.query.lastname;
    res.json({ "name": firstName + " " + lastName });
})

//==================================================> Solution Use body-parser to Parse POST requests



//==================================================> Solution Get Data from Post Requests




































module.exports = app;