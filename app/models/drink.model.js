module.exports = (sequelize, Sequelize) => {
  const Drink = sequelize.define('drink', {
    name: {
      type: Sequelize.STRING
    },
    img: {
      type: Sequelize.STRING
    }
  });

  return Drink;
};
