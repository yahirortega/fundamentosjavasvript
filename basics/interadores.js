const frutas = ['fresa','uva','melon'];

console.log('for');
for(let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}
console.log('for of');
for(const fruta of frutas){
    console.log(fruta);
}

//Iteradores de Array 
//forEach()
console.log('forEach');
frutas.forEach(
    function (fruta){
        console.log(fruta);

    }
);
console.log('forEach con arrow function')
frutas.forEach(
    function (fruta){
        console.log(fruta);

    }
);
frutas.forEach(fruta => console.log(fruta));
/* 
(num) =>{
    return num**2;
}*/
//map
//Itera un array y genera un nuevoo apartir del orginal

const numbers =[1,2,3,4,5,6,7];
const cuadrado = numbers.map(num =>num **2);

console.log(numbers);
console.log(cuadrado);

//iteradores
//itera un array y regresa uno nuevo con valores que cumplen
//condicion

const mayores = numbers.filter(num => num > 4);
/*
(num) => {
    if(num > 4){
        return num;
    }
}
*/
console.log(numbers);
console.log(mayores);

//reduce
//regresa un unico valory apartir de los valores
const sumatoria = numbers.reduce((a,b) => a + b);
const fact = numbers.reduce((a,b) => a * b);

console.log(numbers);
console.log(sumatoria);
console.log(fact);

const minusculas = "abcdefghi".split('');

const mayusculas = minusculas.map(letra => letra.toUpperCase());

console.log(minusculas);
console.log(mayusculas);

//suma 
//regresa True si al menos uno de los elementos se cumplen
const equalTo5 = numbers.some(num => num === 15);
console.log(equalTo5);