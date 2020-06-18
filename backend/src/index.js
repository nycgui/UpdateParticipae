const express = require('express');
const server = express();

server.get('', (req, res) =>{
    res.send('Tudo em funcionamento')
})

server.listen(3001, ()=>{
    console.log('API funcionando');
})