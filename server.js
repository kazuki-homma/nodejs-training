const express = require('express');
const app = express();
const hbs = require("hbs");

// ミドルウェア()
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("こんにちは");
});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        pageTitle: "Page Title",
        contents: "コンテンツです",
        currentYear: new Date().getFullYear(), 
    });
})

app.listen(3000);