module.exports = app => {
  const drinks = require("../controllers/drink.controller.js");

  var router = require("express").Router();

  router.post("/", drinks.create);

  router.get("/", drinks.findAll);

  router.get("/:id", drinks.findOne);

  router.put("/:id", drinks.update);

  router.delete("/:id", drinks.delete);

  router.delete("/", drinks.deleteAll);

  app.use('/api/drinks', router);
};
