const catalago = document.querySelector('#lista-cursos');
const table = document.querySelector('#lista-carrito tbody');
const vaciar = document.querySelector('#vaciar-carrito');

let carrito = [];


function getProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const padre = e.target.parentElement;
        item = {}
        item.id = e.target.getAttribute('data-id');
        item.price = padre.querySelector('p span').innerText;
        item.name = padre.querySelector('h4').innerText;
        item.image = padre.parentElement
                                    .querySelector('img').src;
        item.cantity= 1;
       addProduct(item);
       showTable();

    }
    
}

function addProduct(item){
     //verifica item in carrito
     if(carrito.some(itemCarrito => itemCarrito.id === item.id)){
        carrito.forEach(itemCarrito => {
            if(itemCarrito.id == item.id){
                itemCarrito.cantity++;
            }
        });

    }else{
        carrito.push(item);
    }
    
}

function showTable(){
    table.innerHTML='';
    carrito.forEach(itemCarrito=>{
        table.appendChild(createRow(itemCarrito));
    });
}

function cleanTable(e){
    e.preventDefault();
    table.innerHTML='';
    carrito=[];

}
function createRow(item){
    const row = document.createElement('tr');
    let htmlRow='';
    htmlRow += `<td><img src="${ item.image }" width="100px"></td>`
    htmlRow += `<td>${ item.name }</td>`
    htmlRow += `<td>${ item.price }</td>`
    htmlRow += `<td>${ item.cantity }</td>`
    row.innerHTML = htmlRow;
    return row;
}

catalago.addEventListener('click', getProduct);
vaciar.addEventListener('click', cleanTable);