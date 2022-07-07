// TODO ESTO ES PARA HACER TECLAS DE SUBIR Y BAJAR CANTIDADES
let number = 1;
let numberB = 0;
let numberC = 0;


function morePerson(){
        number = number + 1;
        document.getElementById("number-person").textContent = number;
        if (number > 0){
            let down = document.getElementById("down");
            down.style.color = '#5383ec';
            console.log(number);
         }
        else if (number == 9){

            let up = document.getElementById("up");
            up.style.pointerEvents = "none";
            up.style.color = '#E6EAEF';
        }
        return number;
        
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

    let cantidadDePasajerosAdultos = document.getElementById("number-person").textContent;
    document.getElementById('cantidad-pasajeros').innerHTML = number +' Pasajeros';
    
    console.log(cantidadDePasajerosAdultos);


// Array para offcanvas destino

const ciudades = ['Rio de Janeiro', 'Londres','Atenes','New York','Amsterdam','Bogota','Roma','Playa del Carmen','Santiago de Chile','Mar del Plata']
const paises = ["Alemania","Argentina","Australia","Bélgica","Bolivia","Brasil","Canadá","Chile","China","Colombia",
"Cuba","Dinamarca","Ecuador","Egipto","El Salvador","Eslovenia","España","Estados Unidos",
"Finlandia","Francia","Grecia","Guatemala","Honduras","Hungría","India","Irak",
"Irán","Irlanda","Islandia","Israel","Italia","Jamaica","Japón","México",
"Mongolia","Nicaragua","Nigeria","Noruega","Nueva Zelanda","Países Bajos","Paraguay","Perú",
"Polonia","Portugal","Reino Unido","República Dominicana","Rusia","Samoa","Senegal","Sudáfrica",
"Suecia","Suiza","Tailandia","Tanzania","Turquía","Ucrania","Uganda","Uruguay",
"Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"]


const Argentina = {

}

let cantidadDestinos = ""


function Destinos(){
    for (i=0; i<67;i++){
        const container = document.getElementsByClassName('destinos-container');
        const hijo = document.createElement('div');
        hijo.className = 'destino'
        hijo.innerHTML = "<img></img><span>" + cantidadDestinos + "</span>"

        container[0].appendChild(hijo);
        cantidadDestinos = paises[i] 
    }
}

Destinos()


// Cambio de atributos en los botones del header y cambio de buscadores ONCLICK

const iconFly = document.getElementById('fly');
const iconHotel = document.getElementById('hotel');
const iconHouse = document.getElementById('house');
const iconPackage = document.getElementById('package');

const quitarPropiedadesBotones = [iconFly,iconHotel,iconHouse,iconPackage];



const changeBrowser = document.getElementById('browser');
const browserHoteles = document.getElementById('buscador-hoteles');
const browserAlquileres = document.getElementById('buscador-alquileres');

const quitarBuscadores = [changeBrowser,browserHoteles,browserAlquileres];


function vuelosIconActive(){
    quitarBuscadores.forEach(Buscador => {
        Buscador.classList.remove('buscadores-active')
    } )

    quitarPropiedadesBotones.forEach(Boton => {
        Boton.classList.remove('active')
    })
    
   

    iconFly.className = 'active'
    changeBrowser.className = 'buscadores-active'
}

function hotelesIconActive(){
    quitarBuscadores.forEach(Buscador => {
        Buscador.classList.remove('buscadores-active')
    } )
    quitarPropiedadesBotones.forEach(Boton => {
        Boton.classList.remove('active')
    })
    

    iconHotel.className = 'active'
    browserHoteles.className = 'buscadores-active';
}

function AlquileresIconActive(){
    quitarBuscadores.forEach(Buscador => {
        Buscador.classList.remove('buscadores-active')
    } )
    quitarPropiedadesBotones.forEach(Boton => {
        Boton.classList.remove('active')
    })

    iconHouse.className = 'active'
    browserAlquileres.className = 'buscadores-active';
}

function PaquetesIconActive(){
    quitarBuscadores.forEach(Buscador => {
        Buscador.classList.remove('buscadores-active')
    } )
    quitarPropiedadesBotones.forEach(Boton => {
        Boton.classList.remove('active')
    })

    iconPackage.className = 'active'
    browserAlquileres.className = 'buscadores-active';
}
