//para carregar e instanciar o Chance
var chance = require('chance').Chance(); 

//gerar uma variável com o chance
var usuarioAdmin = chance.name();
var usuarioVisitante = chance.name();
var senhaAdmin = chance.string();
var senhaVisitante = chance.string({ length: 8 }); //para a senha conter 8 caracteres.