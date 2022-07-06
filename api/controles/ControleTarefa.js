const { Model } = require('sequelize/types');
const ModeloTarefa = require('../models/Tarefa');


const ControleTarefa = {
  criarTarefa(req, res) {
    const { tarefa } = req.body;
  }
};

module.exports = ControleTarefa;
