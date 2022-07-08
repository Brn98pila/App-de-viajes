// TODO ESTO ES PARA HACER TECLAS DE SUBIR Y BAJAR CANTIDADES
let numeroPersonas = 1;
let numeroMenores = 0;
let numeroBebes = 0;





function masPersonas(){
    numeroPersonas = numeroPersonas + 1;
    document.getElementById("number-person").textContent = numeroPersonas;
    if ((numeroPersonas > 0)&&(numeroPersonas < 8)){
        let down = document.getElementById("down");
        down.style.color = '#5383ec';
    }
    else if (numeroPersonas == 9){
        let up = document.getElementById("up");
        up.style.pointerEvents = "none";
        up.style.color = '#E6EAEF';
    }
    return numeroPersonas;
    
        
}

function menosPersonas(){
    numeroPersonas = numeroPersonas - 1;
    document.getElementById("number-person").textContent = numeroPersonas;
    let down = document.getElementById("down");
    if(numeroPersonas == 0){
        down.style.color = '#E6EAEF';
        down.style.pointerEvents = 'none'
    }
    else if ((numeroPersonas < 10)||(numeroPersonas >= 0)){
        down.style.pointerEvents = 'auto';
        let up = document.getElementById("up");
        up.style.pointerEvents = "auto";
        up.style.color = '#5383ec';
    }
}

function masMenores(){
    numeroMenores = numeroMenores + 1;
    document.getElementById("number-menores").textContent = numeroMenores;
    if ((numeroMenores > 0)&&(numeroMenores < 8)){
        let downB = document.getElementById("downb");
        downB.style.color = '#5383ec';
    }
    else if (numeroMenores == 9){
        let upB = document.getElementById("upb");
        upB.style.pointerEvents = "none";
        upB.style.color = '#E6EAEF';
    }
    return numeroMenores;
}

function menosMenores(){
    numeroMenores = numeroMenores - 1;
    document.getElementById("number-menores").textContent = numeroMenores;
    if(numeroMenores == 0){
        let downB = document.getElementById("downb");
        downB.style.color = '#E6EAEF';
        downB.style.pointerEvents = 'none';00
    }
    else if ((numeroMenores < 9)||(numeroMenores >= 0)){
        let upB = document.getElementById("upb");
        upB.style.pointerEvents = "auto";
        upB.style.color = '#5383ec';
    }
}

function masBebes(){
    numeroBebes = numeroBebes + 1;
    document.getElementById("number-bebes").textContent = numeroBebes;
    if ((numeroBebes > 0)&&(numeroBebes < 8)){
        let downC = document.getElementById("downc");
        downC.style.color = '#5383ec';
    }
    else if (numeroBebes == 9){
        let upC = document.getElementById("upc");
        upC.style.pointerEvents = "none";
        upC.style.color = '#E6EAEF';
    }
    return numeroBebes;
}

function menosBebes(){
numeroBebes = numeroBebes - 1;
document.getElementById("number-bebes").textContent = numeroBebes;
   if(numeroBebes === 0){
        let downC = document.getElementById("downc");
        downC.style.pointerEvents = 'none';
        downC.style.color = '#E6EAEF';
    }
   else if ((numeroBebes <= 9)||(numeroBebes >= 0)){
        let upC = document.getElementById("upc");
        upC.style.pointerEvents = "auto";
        upC.style.color = '#5383ec';
}
}

//FUNCION BOTON SUMA DE LA CANTIDAD DE PERSONAS

function botonSumaDePasajeros(){
    let totalAdultos = document.getElementById("number-person").textContent;
    let totalMenores = document.getElementById("number-menores").textContent;
    let totalBebes = document.getElementById("number-bebes").textContent;
    
    let numeroTotalPasajeros = parseInt(totalAdultos) + parseInt(totalMenores) + parseInt (totalBebes);

    
    document.getElementById('cantidad-pasajeros').innerHTML = numeroTotalPasajeros +' Pasajeros';


    
        console.log(numeroTotalPasajeros);
}

// BOTONES DE CLASE
    let botonEconomica = document.getElementById('boton-clase-economica') ;
    let botonEjecutiva = document.getElementById('boton-clase-ejecutiva') ;

    function SeleccionBotonClaseEconomica(){
        botonEjecutiva.classList.remove('boton-active');
        botonEconomica.className = 'boton-active'
    } 
    function SeleccionBotonClaseEjecutiva(){
        botonEconomica.classList.remove('boton-active');
        botonEjecutiva.className = 'boton-active'
    } 


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
const browserPaquetes = document.getElementById('buscador-paquetes')

const quitarBuscadores = [changeBrowser,browserHoteles,browserAlquileres,browserPaquetes];


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
    browserPaquetes.className = 'buscadores-active';
}
