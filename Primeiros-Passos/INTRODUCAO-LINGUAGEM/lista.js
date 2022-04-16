/*
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
*/

console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`); // ADCIONANDO UM ITEM AO FINAL DA LISTA


console.log("Destinos possíveis:");
console.log(listaDeDestinos);


listaDeDestinos.splice(1,1);// DELETANDO SOMENTE SAO PAULO DA LISTA
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); // MOSTRAR APENAS UM ELEMENTO

// console.log("Destinos possíveis");
// console.log(salvador, saoPaulo, rioDeJaneiro);
//FICA INVIÁVEL É BEM MELHOR TRABLHAR COM ARRAYS OU OBJETOS