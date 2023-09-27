//ciclo for
for (let i = 0; i <=10; i++){
    console.log(i);
}
for(let i = 10; i >=0; i--){
    console.log(i);
}


let contador = 0;
while (contador > 5){
    console.log(contador);
    contador++;
}

contador = 0;
do{
    console.log(contador);
    contador++;
}while(contador ===0);

const animales = ['perro','gato','leon'];
for (const animal of animales){
    console.log(animal)
}