const { connect } = require("mongoose");
const mongoose = require('mongoose');
const chalk = require("chalk");

module.exports = {
  start() {
    mongoose.set('strictQuery', false);
    try {
      connect(process.env.mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log(chalk.hex(`32CD32`).bold(`[MongoDB] > Conectado ao Banco de Dados.`));
    } catch (err) {
      if (err) return console.log(`🚨 | [MongoDB]:`, err);
    }
  },
};