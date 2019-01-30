const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstudianteSchema = new Schema({
  Nombre: String,
  Numero_de_contacto: String,
  Correo_electronico: String,
  Curso: String
  idcursos:[{type:Schema.Types.ObjectId,ref:"Cursos"}]
});

module.exports = mongoose.model("Estudiante", EstudianteSchema);
