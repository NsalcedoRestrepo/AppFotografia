const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocenteSchema = new Schema({
  nombre: String,
  numero_de_contacto: int,
  estudios: String,
  correo_electronico: String,
  idestudiantes:[{type:Schema.Types.ObjectId,ref:"Estudiantes"}]
});



module.exports = mongoose.model("Docente", DocenteSchema);
