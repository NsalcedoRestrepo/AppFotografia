const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CursoEstudianteSchema = new Schema({
  id_cursos: int,
  id_estudiantes: int,

});

module.exports = mongoose.model("CursoEstudiante", CursoEstudianteSchema);
