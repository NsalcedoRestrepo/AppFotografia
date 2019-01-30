const CursoEstudiante = require("./CursoEstudianteSchema");
exports.getUsers = (req, res) => {
  User.find((err, CursoEstudiante) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(CursoEstudiante);
  });
};

exports.getCursoEstudiante = (req, res) => {
  let id = req.params.id;

  User.find({ _id: id }, (err, CursoEstudiante) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(CursoEstudiante);
  });
};

exports.newUser = (req, res) => {
  const newCursoEstudiante = new CursoEstudiante(req.body);
  newUser.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newCursoEstudiante);
  });
};

exports.updateCursoEstudiante = (req, res) => {
  let nombre = req.body.nombre;
  User.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteCursoEstudiante = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
