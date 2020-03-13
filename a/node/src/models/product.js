const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true, 
    },
    url: {
        type: String,
        required: true,
    },
    createdat: {
        type: Date,
        default: Date.now
    }, 
});
mongoose.model('product', productschema);