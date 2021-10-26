const express = require("express");
const app = express();
const fs = require("fs");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const port = process.env.PORT || 80;

// 127.0.0.1/
app.get("/", (req, res) => {
    const data = fs.readFileSync("./home/index.html", "utf8");
    const bufferLen = Buffer.byteLength(data, "utf8");

    let myHead = {
        "Content-Type": "text/html; charset=UTF-8",
        "Content-Length": bufferLen
    };

    res.writeHead(200, myHead);
    res.write(data);
    res.end();
});

// 127.0.0.1/home/style.css

app.get("/home/style", (req, res) =>{
    const data = fs.readFileSync("./home/style.css", "utf8");
    const bufferLen = Buffer.byteLength(data, "utf8");

    let myHead = {
        "Content-Type": "text/css; charset=UTF-8",
        "Content-Length": bufferLen
    };

    res.writeHead(200, myHead);
    res.write(data);
    res.end();   
});

app.get("/home/main", (req, res) =>{
    const data = fs.readFileSync("./home/main.js", "utf8");
    const bufferLen = Buffer.byteLength(data, "utf8");

    let myHead = {
        "Content-Type": "text/javascript; charset=UTF-8",
        "Content-Length": bufferLen
    };

    res.writeHead(200, myHead);
    res.write(data);
    res.end();   
});

app.listen(port);