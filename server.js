const express = require('express');
const app = express();
const hbs = require("hbs");

// ミドルウェア()
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => {
    return new Date().getFullYear();
});
hbs.registerHelper("uppercase", text => {
    return text.toUpperCase();
})
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    let now = new Date();
    console.log(`${now}:`);
    next();
});


app.get("/", (req, res) => {
    res.render("home.hbs", {
        pageTitle: "Home Page",
        contents: "ららら"
    });
});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        pageTitle: "Page Title",
        contents: "コンテンツです"
    });
})

app.listen(3000);