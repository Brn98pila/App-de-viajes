// TODO ESTO ES PARA HACER TECLAS DE SUBIR Y BAJAR CANTIDADES
let number = 1;
let numberB = 0;
let numberC = 0;

let cantidadDePasajerosBebes = document.getElementById("number-person");
function morePerson(){
        number = number + 1;
        document.getElementById("number-person").textContent = number;
        if (number > 0){
            let down = document.getElementById("down");
            down.style.color = '#5383ec';
         }
}

function menosPerson(){
    number = number - 1;
    document.getElementById("number-person").textContent = number;
    if(number == 0){
        let down = document.getElementById("down");
        down.style.color = '#E6EAEF';
    }
}

function moreMenores(){
    numberB = numberB + 1;
    document.getElementById("number-menores").textContent = numberB;
    if (numberB > 0){
        let downB = document.getElementById("downb");
        downB.style.color = '#5383ec';
     }
}

function menosMenores(){
numberB = numberB - 1;
document.getElementById("number-menores").textContent = numberB;
if(numberB == 0){
    let downB = document.getElementById("downb");
    downB.style.color = '#E6EAEF';
}
}

function moreBabes(){
    numberC = numberC + 1;
    document.getElementById("number-bebes").textContent = numberC;
    if (numberC > 0){
        let downC = document.getElementById("downc");
        downC.style.color = '#5383ec';
     }
}

function menosBabes(){
numberC = numberC - 1;
document.getElementById("number-bebes").textContent = numberC;
if(numberC === 0){
    let downC = document.getElementById("downc");
    downC.style.color = '#E6EAEF';

   
}
}

// Anexar numeros al principal
Pasajeros = number + numberB + numberC;
document.getElementById('cantidad-pasajeros').innerHTML = parseInt(cantidadDePasajerosBebes);