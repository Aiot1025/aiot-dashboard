const express = require("express");
const app = express();
const fs = require("fs");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const port = process.env.PORT || 80;

app.get("/", (req, res) => {
    const data = fs.readFileSync("./home/index.html", "utf8");
    const bufferLen = Buffer.byteLength(data, "utf8");

    let myHead = {
        "Conntent-Type": "text/html; charset=UTF-8",
        "Content-Length": bufferLen
    };

    res.writeHead(200, myHead);
    res.write(data);
    res.end();
});


app.listen(port);