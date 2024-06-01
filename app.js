const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const Visitor = require("./models/visitor.js");
const Spin_result = require("./models/spin_result.js");
const { error } = require("console");

const app = express();

const baseURL = "http://donuts.rets.gr/";
const baseURLdev = "http://localhost:8080/";

//db key
const dbURI =
  "mongodb+srv://codingGoat:q9PEg3vJBiRy044C@rets-project.obujmu0.mongodb.net/donut-db?retryWrites=true&w=majority&appName=Rets-project";

//  Connect to db
mongoose
  .connect(dbURI)
  .then((result) => {
    const message = "Connected to db@" + result.connections[0].host;
    logger(message);
    console.log("Connected to db\n");
    app.listen(8080);
  })
  .catch((err) => {
    error_logger(err);
  });

// Future use and testing............
// app.set("view engine", "ejs"); ...
// app.set('views', 'src');       ...
// ..................................

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
app.get("/", (req, res) => {
  // testing if the visitor has the correct pwd *Under Construction*
  const visitorURL = new URL(req.url, baseURLdev);
  const visitorCode = visitorURL.search.slice(1);
  console.log("Got the request ->", visitorCode);
  Visitor.findOne({ code: visitorCode })
    .then((result) => {
      if (!result) return res.redirect("/404");
      if (result.visited === false) {
        // result.visited = true;
        result.save().catch((err) => {
          console.log(err);
          error_logger(err);
        });
        res.sendFile("./dist/index.html", { root: __dirname });
      } else {
        res.send("Access Denied");
      }
    })
    .catch((err) => {
      error_logger(err);
      console.log(err);
    });
});

app.get("/form", (req, res) => {
  const visitorURL = new URL(req.url, baseURLdev);
  const visitorCode = visitorURL.search.slice(1);

  Visitor.findOne({ code: visitorCode })
    .then((result) => {
      if (!result) {
        res.send("Access Denied");
      }
      res.sendFile("./dist/form.html", { root: __dirname });
    })
    .catch((err) => {
      console.log(err);
      error_logger(err);
    });
});

app.get("/submit-ok", (req, res) => {
  res.sendFile("./dist/submit.html", { root: __dirname });
});

app.post("/", (req, res) => {
  const visitorURL = new URL(req.url, baseURLdev);
  const visitorCode = visitorURL.search.slice(1);
  const spin_result = new Spin_result();
  console.log(req.body);
  spin_result.result = req.body.result;
  spin_result.code = req.body.code;

  spin_result
    .save()
    .then(() => console.log("result sent OK"))
    .catch((err) => console.log(err));

  // Visitor.findOne({ code: visitorCode }).then((result) => {
  //   result.name = req.body.name;
  //   result.email = req.body.email;
  //   result.phone = req.body.phone;
  //   result
  //     .save()
  //     .then((result) => {
  //       res.redirect("/submit-ok");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       error_logger(err);
  //     });
  // });
});

app.post("/submit", (req, res) => {
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
        error_logger(err);
      });
  });
});

app.get("/404", (req, res) => {
  console.log("Request ->", req.url);
  res.status(404).sendFile("./dist/404.html", { root: __dirname });
});

app.use(express.static("dist"));

app.use((req, res) => {
  console.log("Request ->", req.url);
  res.redirect("/404");
});

const error_logger = function (err) {
  let timestamp = new Date().toISOString();
  const filename = "logs/error_logs.txt";
  const err_data = `
${timestamp}
${err.stack}\n`;
  fs.appendFile(filename, err_data, (err) => {
    if (err) throw err;
  });
};

const logger = function (msg) {
  let timestamp = new Date().toISOString();
  const filename = "./logs/info_logs.txt";
  const data = `
${timestamp}
${msg}\n`;
  fs.appendFile(filename, data, (err) => {
    if (err) throw err;
  });
};
