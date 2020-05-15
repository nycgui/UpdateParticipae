var mongoose = require('mongoose');
mongoose.connect('mongodb://fabio:metatron@geonosis.mongodb.umbler.com:35762/engine');

var customerSchema = new mongoose.Schema({
    nome: String,
    profissao: String,
    tags: [String]
},{collection:'customers'}
);

module.exports = {Mongoose: mongoose,CustomerSchema:customerSchema}