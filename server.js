//importamos
express = require("express");
mongoose = require("mongoose");
//instanciamos
const app = express();


const bodyParser = require("body-parser");
//midleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
  .connect(
    "mongodb://localhost:27017/colegio",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos
var Curso = require("./lib/User");

app.get("/Curso", (req, res) => {
  user.getUsers(req, res);
});

app.get("/Curso/:id", (req, res) => {
  user.getUser(req, res);
});

app.post("/Curso", (req, res) => {
  user.newUser(req, res);
});

app.put("/Curso/:id", (req, res) => {
  user.updateUser(req, res);
});

app.delete("/Curso/:id", (req, res) => {
  user.deleteUser(req, res);
});

// escuchamos
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
