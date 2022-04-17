console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;
let destino = 'Salvador'


console.log("Destinos possíveis:");
console.log(listaDeDestinos);


// if (idadeComprador >= 18 || estaAcompanhada == true) {
//     console.log("Boa Viagem!!");
//     listaDeDestinos.splice(2, 1); //removendo item
// } else {
//     console.log("Não é maior de Idade e não posso vender");
// }

// console.log("Embarque: ")
// if(idadeComprador >= 18 && temPassagemComprada){
//     console.log("Boa viagem");
// }else{
//     console.log("Você não pode embarcar");
// }


// console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;

while(contador<3){
  if(listaDeDestinos[contador] == destino){
    // console.log("Destino existe");
    destinoExiste = true;
    break;
  }
  contador += 1;
}

console.log(`Destino existe: ${destinoExiste}`)


// ### FOR ###

for(cont = 0; cont < 3; cont++){
  if(listaDeDestinos[cont] == destino){
    destinoExiste = true;
    break;
  }
}
console.log(listaDeDestinos)
console.log(`Destino existe: ${destinoExiste}`)
