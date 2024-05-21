const express = require("express");
const mongoose = require("mongoose");
const Visitor = require("./models/visitor.js");

const app = express();

const baseURL = "http:donuts.rets.gr/";
const baseURLdev = "http://localhost:3000/";

//db key
const dbURI =
    "mongodb+srv://codingGoat:q9PEg3vJBiRy044C@rets-project.obujmu0.mongodb.net/donut-db?retryWrites=true&w=majority&appName=Rets-project";

//  Connect to db
mongoose
    .connect(dbURI)
    .then((result) => {
        console.log("Connected to db");
        app.listen(3000);
    })
    .catch((err) => console.log(err));

// Future use and testing............
// app.set("view engine", "ejs"); ...
// app.set('views', 'src');       ...
// ..................................

// Routes
app.get("/", (req, res) => {
    // testing if the visitor has the correct pwd *Under Construction*
    const testURL = new URL(req.url, baseURLdev);
    console.log("Got the request ->", testURL.search);
    Visitor.find()
        .then((result) => {
            if (result[0].code == "67545") {
                res.sendFile("./dist/index.html", { root: __dirname });
            } else {
                res.send("Access Denied");
            }
        })
        .catch((err) => console.log(err));
});

//Testing route that creates a dummy visitor
app.get("/debug-db", (req, res) => {
    const visitor = new Visitor({
        name: "John Doe",
        email: "example@domain.com",
        phone: 6955884499,
        code: 67545,
    });

    visitor
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// Serving of static files
app.use(express.static("dist"));
