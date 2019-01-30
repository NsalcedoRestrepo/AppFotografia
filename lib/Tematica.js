const Tematica = require("./TematiaSchema");
exports.getUsers = (req, res) => {
  User.find((err, Tematica) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getTematica = (req, res) => {
  let id = req.params.id;

  Tematica.find({ _id: id }, (err, Tematica) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(Tematica);
  });
};

exports.newUser = (req, res) => {
  const newUser = new Tematica(req.body);
  newUser.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newTematica);
  });
};

exports.updateTematica = (req, res) => {
  let nombre = req.body.nombre;
  Tematica.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteTematica = (req, res) => {
  Tematica.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
