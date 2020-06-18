const mongoose = require('../config/database')

const Schema =  mongoose.Schema;

const ServidorSchema = new Schema({
    rgf: {type: Number},
    nome: {type: String},
    cargo: {type: String},
    rendimentos: {type: Number}
});

module.exports = mongoose.model('tb_Servidor', ServidorSchema);