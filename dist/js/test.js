const express = require("express");
var fs = require("fs");
const router = express.Router();
const PORT = 5500;
const app = express();
app.set("view engine", "jade");
app.set("views", __dirname + "/views");
app.use(
  express.static("/mnt/c/Users/aadsh/Desktop/Online_Portfolio/dist" + "/css")
);
app.use(
  express.static("/mnt/c/Users/aadsh/Desktop/Online_Portfolio/dist" + "/img")
);
app.use(
  express.static("/mnt/c/Users/aadsh/Desktop/Online_Portfolio/dist" + "/js")
);
var db = require("pg");
var dbConnection =
  "postgressql://postgres:Abeeaad112!@localhost:5432/MyProjects";

router.get("/work.html", (req, res) => {
  res.sendFile("/mnt/c/Users/aadsh/Desktop/Online_Portfolio/dist/work.html");
});

router.get("/index.html", (req, res) => {
  res.sendFile("/mnt/c/Users/aadsh/Desktop/Online_Portfolio/dist/index.html");
});

router.get("/about.html", (req, res) => {
  res.sendFile("/mnt/c/Users/aadsh/Desktop/Online_Portfolio/dist/about.html");
});

app.route("/goData").get(function (req, res) {
  fs.readFile(
    "/mnt/c/Users/Dell/Desktop/Rhodes courses and classes/Classes Takenin Rhodes/CS141/program6/PPM files/Sharma_Shaantanu_prg6_grey.py",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      //console.log(data);
      res.render("access", { output: data });
    }
  );
});

app.use("/", router);
app.listen(PORT, "127.0.0.1");

console.log(`Server is listening on port: ${PORT}`);
