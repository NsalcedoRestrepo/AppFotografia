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
    "mongodb://localhost:27017/fotografia",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos
var estudiante = require("./lib/Estudiante");

app.get("/estudiantes", (req, res) => {
  user.getEstudiantes(req, res);
});

app.get("/estudiantes/:id", (req, res) => {
  user.getEstudiantes(req, res);
});

app.post("/estudiantes", (req, res) => {
  user.newEstudiantes(req, res);
});

app.put("/estudiantes/:id", (req, res) => {
  user.updateEstudiantes(req, res);
});

app.delete("/estudiantes/:id", (req, res) => {
  user.deleteEstudiantes(req, res);
});

var curso = require("./lib/Curso");

app.get("/cursos", (req, res) => {
  user.getCurso(req, res);
});

app.get("/cursos/:id", (req, res) => {
  user.getCurso(req, res);
});

app.post("/cursos", (req, res) => {
  user.newCurso(req, res);
});

app.put("/cursos/:id", (req, res) => {
  user.updateCurso(req, res);
});

app.delete("/cursos/:id", (req, res) => {
  user.deleteCurso(req, res);
});

//modulos externos
var tematica = require("./lib/Tematica");

app.get("/tematicas", (req, res) => {
  user.getTematicas(req, res);
});

app.get("/tematicas/:id", (req, res) => {
  user.getTematicas(req, res);
});

app.post("/tematicas", (req, res) => {
  user.newTematicas(req, res);
});

app.put("/tematicas/:id", (req, res) => {
  user.updateTematicas(req, res);
});

app.delete("/tematicas/:id", (req, res) => {
  user.deleteTematicas(req, res);
});

var docente = require("./lib/Docente");

app.get("/docentes", (req, res) => {
  user.getDocentes(req, res);
});

app.get("/docentes/:id", (req, res) => {
  user.getDocentes(req, res);
});

app.post("/docentes", (req, res) => {
  user.newDocentes(req, res);
});

app.put("/docentes/:id", (req, res) => {
  user.updateDocentes(req, res);
});

app.delete("/docentes/:id", (req, res) => {
  user.deleteDocentes(req, res);
});
var fotografia = require("./lib/Fotografia");

app.get("/fotografias", (req, res) => {
  user.getFotografias(req, res);
});

app.get("/fotografias/:id", (req, res) => {
  user.getFotografias(req, res);
});

app.post("/fotografias", (req, res) => {
  user.newFotografiias(req, res);
});

app.put("/fotografias/:id", (req, res) => {
  user.updateFotografias(req, res);
});

app.delete("/fotografias/:id", (req, res) => {
  user.deleteFotografias(req, res);
});




// escuchamos
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
