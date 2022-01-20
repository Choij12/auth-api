'use strict';

const foodModel = (sequelize, DataTypes) => sequelize.define('Food', {
  name: { type: DataTypes.STRING, allowNull: false },
  calories: { type: DataTypes.NUMBER, allowNull: false },
  type: { type: DataTypes.ENUM('fruit', 'vegetable', 'protein'), required: true }
});

module.exports = foodModel;
