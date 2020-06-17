const request = require('request');
var fs = require('fs');
const options = {

  url: 'http://www.licitacao.pmmc.com.br/Transparencia/vencimentos2',

  method: 'GET',

  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
  }
  
};

request(options,function (err, res, body){
  
  //a linha abaixo joga as informações do body para a variavel json
  let json = JSON.parse(body)

  //a linha abaixo transforma o conteudo da variavel json em string e lança na variavel dados.
  let dados=JSON.stringify(json,null,4)

  //a linha abaixo serve apenas para exibir o conteudo da variavel dados para testar o funcionamento.
  console.log(dados)
  
  /*
  decidi usar duas variaveis para ser facil de entender. A variavel 'json' contem o conteudo
  nao convertido do body do site, ja a variavel 'dados' contem o conteudo do body convertido em uma string.
  Para poder ver se tem diferença, quando coloca a variavel json para ser exibida com console.log, ela nao mostrara todo o 
  conteudo do body, ja a variavel dados exibira tudo.
  */
});
