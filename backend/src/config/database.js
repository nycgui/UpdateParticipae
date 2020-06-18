const mongoose = require ('mongoose');

const url = 'mongodb://localhost:27017/db_UpdateParticipae'

mongoose.connect(url, { useNewUrlParser: true})

module.exports = mongoose;