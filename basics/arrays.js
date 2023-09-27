const resultado= document.getElementById('resultado');
const inputFod = document.getElementById('itemFood');
//Arrays en java
//Coleccion ordenada de datos


const enteros = new Array(1,2,3,4,5,6)
console.log(enteros);
console.log(enteros[0]);
enteros[0] = 10;
enteros[2] *= 10;
console.log(enteros);

const frutas =['manzana','platano','aguacate','uva'];

console.log(frutas);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas.length);//numero de elementos
frutas[0] = 'uva';
console.log(frutas);
resultado.innerText = frutas.join(' - ');

const fod =[];
fod.push('🍔');
fod.push('🥨');
fod.push('🍿');
fod.unshift('🥗');
fod.unshift('🥫');
console.log(fod);

let itemFood = fod.pop()
console.log(itemFood);
itemFood = fod.shift();
console.log(itemFood);
console.log(fod);


const ShowLista =() =>{
//ciclo for para iterar arrar
    let listaHtml =''
    for(let i=0; i < fod.length; i++){
        listaHtml += `<li>${ fod[i] }</li>`;
    }
    //console.log(listaHtml);
    const ulFood = document.getElementById('comida');
    ulFood.innerHTML = listaHtml;
}
const addFruit = () => {
    const fruit = inputFod.value;
    fod.push(fruit);
    inputFod.value='';
    ShowLista();
}