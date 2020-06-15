const request = require('request');
var fs = require('fs');
const options = {
  //este codigo ira ate o link e irá pegar as informações  necessarias para o webcrawler usando o metodo GET
  url: 'http://www.licitacao.pmmc.com.br/Transparencia/vencimentos2',

  method: 'GET',

  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
  }
  
};

request(options,function (err, res, body){

  let json = JSON.parse(body);
  //o codigo abaixo cria um arquivo .json com as informações do site organizando ela e exibindo uma mensagem de sucesso
  fs.writeFile('servidores.json', JSON.stringify(json, null, 4), function(err){

    console.log('Arquivo criado com sucesso. Verifique a pasta.');

})
  //o comando abaixo exibiria o mesmo conteudo do arquivo servidores.json no log 
  //console.log(json);

});
