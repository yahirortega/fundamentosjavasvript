const body = document.querySelector('body');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const trans = document.getElementById('trans');

function getColor(){
    const redVal = Math.floor((red.value /100) * 255);
    const greenVal = Math.floor((green.value/100) * 255);
    const blueVal = Math.floor((blue.value/100) * 255);
    const transVal = trans.value/100;
    return `rgb(${ redVal }, ${greenVal}, ${blueVal}, ${ transVal})`;

}
function setColor(){
    body.style.background = getColor();
}

setColor(); 

red.addEventListener('change', setColor);
green.addEventListener('change', setColor);
blue.addEventListener('change', setColor);
trans.addEventListener('change', setColor);