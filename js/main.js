//BOTON PARA CAMBIAR DE LADO LA SALIDA Y LA LLEGADA
function cambiarDeLadoBotonesBox(){
    let browserCaja = document.getElementById('browser-box');
    browserCaja.className = "browser-caja-hijos";
}



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
        down.style.pointerEvents = 'auto'
        
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
    else if ((numeroPersonas < 10)||(numeroPersonas > 0)){
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
        downB.style.pointerEvents = 'auto'
        
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
        downC.style.pointerEvents = 'auto'

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

// BOTONES DE CLASE PARA VIAJAR EN AVION

let botonEconomica = document.getElementById('boton-clase-economica') ;
let botonEjecutiva = document.getElementById('boton-clase-ejecutiva') ;

function SeleccionBotonClaseEconomica(){
    botonEjecutiva.classList.remove('boton-active');
    botonEconomica.className = 'boton-active'
    document.getElementById('clase-box').innerHTML = 'Economica'
} 
function SeleccionBotonClaseEjecutiva(){
    botonEconomica.classList.remove('boton-active');
    botonEjecutiva.className = 'boton-active'
    document.getElementById('clase-box').innerHTML = 'Ejecutiva';

}

//FUNCION BOTON SUMA DE LA CANTIDAD DE PERSONAS Y BLOQUEA LOS BOTONES AL SUMAR TODOS 9

function botonSumaDePasajeros(){
    let totalAdultos = document.getElementById("number-person").textContent;
    let totalMenores = document.getElementById("number-menores").textContent;
    let totalBebes = document.getElementById("number-bebes").textContent;
    
    globalThis.numeroTotalPasajeros = parseInt(totalAdultos) + parseInt(totalMenores) + parseInt (totalBebes);
    document.getElementById('cantidad-pasajeros').innerHTML = numeroTotalPasajeros +' Pasajeros';

    document.getElementById('cerrar-offcanvas-pasajeros').click();

    let conjuntoBotonesSuma = [document.getElementById("upc"),document.getElementById("upb"),document.getElementById("up")]

    
    /* if(numeroTotalPasajeros >= 9){                           Todavia no pude encontrar la manera de ejectuarlo
        conjuntoBotonesSuma.forEach(boton =>{                   Lo entiendo como, si la suma del numero total de pasajeros
            boton.style.color('#fff');                          es mayor o igual a 9, se ejecuta el bucle que cambia 
            boton.style.pointerEvents('none');                  los atributos de cada boton para tener un maximo de 9 pasajeros, 
        })                                           asi no pueden enviar  mas de 9 pasajeros. Espero a la clase para investigarlo mejor
                                                                 
    }   */                                                       
   

}




// Array para offcanvas destino / viaje en avion
function constructorCiudades(ciudad, acronimo, icono, pais){
   this.ciudad = ciudad;
   this.acronimo = acronimo;
   this.icono = icono;
   this.pais = pais;

}
const grecia = new constructorCiudades("Atenas","GRE","icon-avion","Grecia");
const inglaterra = new constructorCiudades("Londres","ING","icon-avion","Inglaterra");
const estadosUnidos = new constructorCiudades("NewYork","US","icon-avion","Estados Unidos");
const colombia = new constructorCiudades("Cali","US","icon-avion","Colombia");
const paisesBajos = new constructorCiudades("Amsterdam","HOL","icon-avion","Paises Bajos");
const italia = new constructorCiudades("Roma","ITA","icon-avion","Italia");
const mexico = new constructorCiudades("Playa del Carmen","MEX","icon-avion","Mexico");
const argentina = new constructorCiudades ("Bariloche","ARG","icon-avion","Argentina");
const japon = new constructorCiudades("Tokio","JPN","icon-avion","Japon");
const manaos = new constructorCiudades("Manaos","BRS","icon-avion","Brasil");
const rioDeJaneiro = new constructorCiudades("Rio de Janeiro","BRS","icon-avion","Brasil");
const salvadorDeBahia = new constructorCiudades("Salvador de Bahia","BRS","icon-avion","Brasil");
const fernandoDeNoronha = new constructorCiudades("Fernando de Noronha","BRS","icon-avion","Brasil");

const brasil = [manaos,rioDeJaneiro,salvadorDeBahia,fernandoDeNoronha];
const paises = [grecia,inglaterra,estadosUnidos,colombia,paisesBajos,italia,mexico,argentina,japon,brasil];


function destinos(){
   for (let ciudades of paises){
    function multiplesCiudades(){
        if(ciudades.ciudad == undefined){
            for(ciudades of brasil){
                console.log(ciudades.ciudad);
            } return ciudades.ciudad;
        }
        else return ciudades.ciudad;
       
    } 
        const container = document.getElementsByClassName('destinos-container');
        const hijo = document.createElement('div');
        hijo.className = 'destino'
        hijo.innerHTML = "<i class='" + ciudades.icono + "'></i><div><span>" + multiplesCiudades() + ", " + ciudades.pais + "</span><span><p>Todos los aeropuertos</p></span></div><span class='acronimo'>" + ciudades.acronimo + "</span>"

        container[0].appendChild(hijo);
        console.log(ciudades.icono);
    }

}

destinos()


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
