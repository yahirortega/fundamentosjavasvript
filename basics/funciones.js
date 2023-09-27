function saluda(){
    console.log('Hola');

}
saluda();

// Funciones con parametros sin retorno
const saludaA = function(name){
    console.log('Holaa '+name);
}
saludaA('Clark Kent');

// Funciones con parametros y con retorno
const fact = function(num){
    if(num === 0) return 1;
    return fact(num -1) * num;
}
const result = fact(5);
console.log(result)

// Arrow functions o funciones de flecha
// Sin parametros y sin retorno
const saludaenChino = () => {
    console.log('Ni Hao');
}
saludaenChino();

// con 1 parametro sin retorno
const mayuscula = (word) =>{
    console.log(word.toUpperCase());
}
mayuscula('hola');

const minuscula = word =>{
    console.log(word.toLowerCase());
}
minuscula('HELLO');

// Dos o más parametros y con retorno
const fullname = (firstname, lastname) =>{
    return firstname + '' + lastname;
}
const nombrecompleto = fullname('Bruce', 'Wayne');
console.log(nombrecompleto);

// Si el return es la unica linea que se puede simplificar
const duplica = num => num*2;
const doble = duplica(36);
console.log(doble);