const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TematicaSchema = new Schema({
  Contenido: String,
  tematica: String,
  Id_cursos: Int,
});

module.exports = mongoose.model("Tematica", TematicaSchema);
