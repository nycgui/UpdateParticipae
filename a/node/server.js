const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//iniciando o app
const app = express();

//iniciando o bd
mongoose.connect('mongodb//localhost:27017/nodeapi');
requireDir('./src/models');
const product = mongoose.model('product');
//primeira rota
app.get('/', (req,res)=>{
    product.create({title: "react native", 
    description: "biuld native apps with react",
    url: "http://github.com/facebook/react-native"});
    
    return res.send("hello world gaya");
});
app.listen(3001);
