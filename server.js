const express = require('express');
const app = express();

// ミドルウェア()

app.get("/", (req, res) => {
    res.send("こんにちは");
});

app.get("/about", (req, res) => {
    res.send({
        name: "武",
        family: "剛田",
    });
})

app.listen(3000);