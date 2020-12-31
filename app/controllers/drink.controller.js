const db = require("../models");
const Drink = db.drinks;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content cannot be empty"
    });
    return;
  }

  const drink = {
    name: req.body.name,
    img: req.body.img
  };

  // Save Drink in the database
  Drink.create(drink)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the drink."
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Drink.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving drinks."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Drink.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Drink.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Drink was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update drink with id=${id}. Maybe drink was not found or req.body is empty`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating drink with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Drink.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Drink deleted"
        });
      } else {
        res.send({
          message: `Cannot delete drink with id=${id}. Maybe drink was not found`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete drink with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Drink.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Drinks were deleted successfully` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all drinks."
      });
    });
};
