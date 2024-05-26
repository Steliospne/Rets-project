const express = require("express");
const mongoose = require("mongoose");
const Visitor = require("./models/visitor.js");

const app = express();

const baseURL = "http:donuts.rets.gr/";
const baseURLdev = "http://localhost:8080/";

//db key
const dbURI =
  "mongodb+srv://codingGoat:q9PEg3vJBiRy044C@rets-project.obujmu0.mongodb.net/donut-db?retryWrites=true&w=majority&appName=Rets-project";

//  Connect to db
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to db");
    app.listen(8080);
  })
  .catch((err) => console.log(err));

// Future use and testing............
// app.set("view engine", "ejs"); ...
// app.set('views', 'src');       ...
// ..................................

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routing
app.get("/", (req, res) => {
  // testing if the visitor has the correct pwd *Under Construction*
  const visitorURL = new URL(req.url, baseURLdev);
  const visitorCode = visitorURL.search.slice(1);
  console.log("Got the request ->", visitorCode);
  Visitor.findOne({ code: visitorCode })
    .then((result) => {
      if (result.visited === false) {
        // result.visited = true;
        result.save().catch((err) => {
          console.log(err);
        });
        res.sendFile("./dist/index.html", { root: __dirname });
      } else {
        res.send("Access Denied");
      }
    })
    .catch((err) => console.log(err));
});

app.get("/form", (req, res) => {
  const visitorURL = new URL(req.url, baseURLdev);
  const visitorCode = visitorURL.search.slice(1);

  Visitor.findOne({ code: visitorCode })
    .then((result) => {
      console.log(result);
      if (!result) {
        res.send("Access Denied");
      }
      res.sendFile("./dist/form.html", { root: __dirname });
    })
    .catch((err) => console.log(err));
});

app.get("/submit-ok", (req, res) => {
  res.sendFile("./dist/submit.html", { root: __dirname });
});

app.post("/submit", (req, res) => {
  console.log(req.url, req.body);
  const visitorURL = new URL(req.url, baseURLdev);
  const visitorCode = visitorURL.search.slice(1);
  Visitor.findOne({ code: visitorCode }).then((result) => {
    result.name = req.body.name;
    result.email = req.body.email;
    result.phone = req.body.phone;
    result
      .save()
      .then((result) => {
        res.redirect("/submit-ok");
      })
      .catch((err) => {
        console.log(err);
      });
  });
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

app.get("/404.html", (req, res) => {
  console.log("Request ->", req.url);
  res.sendFile("./dist/404.html", { root: __dirname });
});
app.use(express.static("dist"));

app.use((req, res) => {
  console.log("Request ->", req.url);
  res.redirect("/404.html");
});
