const express = require('express');
const app = express();
const hbs = require("hbs");
const fs = require('fs');
const port = process.env.PORT || 3000;

// ミドルウェア()
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => {
    return new Date().getFullYear();
});
hbs.registerHelper("uppercase", text => {
    return text.toUpperCase();
})

app.use((req, res, next) => {
    let now = new Date();
    let log = `${now}:${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile("server.log", log + "\n", err => {
        if (err) {
            console.log(err);
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render("maintenance.hbs");
// })

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("home.hbs", {
        pageTitle: "Home Page",
        contents: "ららら"
    });
});

app.get("/about:id", (req, res) => {
    console.log(req.params.id);
    res.render("about.hbs", {
        pageTitle: "Page Title",
        contents: "コンテンツです"
    });
})

app.listen(port, () => {
    console.log(`ポート番号${port}で立ち上がりました`);
});