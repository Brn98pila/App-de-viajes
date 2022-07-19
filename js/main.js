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
function constructorCiudades(ciudad, acronimo, icono, pais, aeropuerto){
   this.ciudad = ciudad;
   this.acronimo = acronimo;
   this.icono = icono;
   this.pais = pais;
   this.aeropuerto = aeropuerto;

}
//inglaterra 
const londres = new constructorCiudades("Londres","ING","icon-avion","Inglaterra", "Todos los aeropuertos");
const manchester = new constructorCiudades("Manchester","ING","icon-avion","Inglaterra","Todos los aeropuertos");
const birmingham = new constructorCiudades("Birmingham","ING","icon-avion","Inglaterra","Birmingham-West Midlands");
const liverpool = new constructorCiudades("Liverpool","ING","icon-avion","Inglaterra","Todos los aeropuertos");
const inglaterra = new constructorCiudades("Inglaterra","ING","icon-avion","","Pais");
// estados unidos 
const newYork = new constructorCiudades("NewYork","US","icon-avion","Estados Unidos", "Todos los aeropuertos");
const chicago = new constructorCiudades("Chicago","US","icon-avion","Estados Unidos","Todos los aeropuertos");
const dallas = new constructorCiudades("Dallas","US","icon-avion","Estados Unidos","Todos los aeropuertos");
const filadelfia = new constructorCiudades("Filadelfia","US","icon-avion","Estados Unidos","Todos los aeropuertos");
const miami = new constructorCiudades("Miami","US","icon-avion","Estados Unidos","Todos los aeropuertos");
const losAngeles = new constructorCiudades("Los Angeles","US","icon-avion","Estados Unidos","Todos los aeropuertos");
const estadosUnidos = new constructorCiudades("Estados Unidos","US","icon-avion","","Pais");
//colombia
const bogota = new constructorCiudades("Bogota","US","icon-avion","Colombia","Todos los aeropuertos");
const cali = new constructorCiudades("Cali","US","icon-avion","Colombia","Todos los aeropuertos");
const medellin = new constructorCiudades("Medellin","US","icon-avion","Colombia","Todos los aeropuertos");
const barranquilla = new constructorCiudades("Barranquilla","US","icon-avion","Colombia","Ernesto Cortissoz");
const colombia = new constructorCiudades("Colombia","US","icon-avion","","Pais");
//holanda
const amsterdam = new constructorCiudades("Amsterdam","AMS","icon-avion","Paises Bajos","Todos los aeropuertos");
const roterdam = new constructorCiudades("Roterdam","ROT","icon-avion","Paises Bajos","Aer. Roterdam-La Haya");
const paisesBajos = new constructorCiudades("Paises Bajos","HOL","icon-avion","","Pais");
//italia
const milan = new constructorCiudades("Milan","MIL","icon-avion","Italia","Todos los aeropuertos");
const roma = new constructorCiudades("Roma","ROM","icon-avion","Italia","Todos los aeropuertos");
const turin = new constructorCiudades("Turin","TUR","icon-avion","Italia","Aeropuerto Turin-Caselle");
const genova = new constructorCiudades("Genova","GNV","icon-avion","Italia","Aeropuerto Nac Genova");
const venecia = new constructorCiudades("Venecia","VEN","icon-avion","Italia","Marco Polo Intl");
const italia = new constructorCiudades("Italia","ITA","icon-avion","","Pais");
//mexico
const ciudadDeMexico = new constructorCiudades("Ciudad de Mexico","CMX","icon-avion","Mexico", "Todos los aeropuertos");
const monterrey = new constructorCiudades("Monterry","MON","icon-avion","Mexico","Aeropuerto Intl Monterrey");
const culiacan = new constructorCiudades("Culiacan","CUL","icon-avion","Mexico","Aeropuerto Intl Culiacan");
const veracruz = new constructorCiudades("Veracruz","VER","icon-avion","Mexico","Gral Heriberto Jara");
const playaDelCarmen = new constructorCiudades("Playa del Carmen","PDC","icon-avion","Mexico","Playa del Carmen Nac.");
const mexico = new constructorCiudades("Mexico","MEX","icon-avion","","Pais");
//japon
const hiroshima = new constructorCiudades("Hiroshima","HRS","icon-avion","Japon","Aeropuerto Intl Hiroshima");
const osaka = new constructorCiudades("Osaka","OSK","icon-avion","Japon","Todos los aeropuertos");
const nagoya = new constructorCiudades("Nagoya","NAG","icon-avion","Japon","Chūbu Centrair Intl");
const tokio = new constructorCiudades("Tokio","TOK","icon-avion","Japon", "Todos los aeropuertos");
const japon = new constructorCiudades("Japon","JPN","icon-avion","","Pais");
//grecia
const atenas = new constructorCiudades("Atenas","ATE","icon-avion","Grecia", "Todos los aeropuertos");
const santorini = new constructorCiudades("Santorini","SAN","icon-avion","Grecia","Thira Intl");
const delfos = new constructorCiudades("Delfos","DEL","icon-avion","Grecia","Nea Anchialos National");
const creta = new constructorCiudades("Creta","CRE","icon-avion","Grecia","Heraclion Intl");
const grecia = new constructorCiudades("Grecia","GRE","icon-avion","","Pais");
// brasil
const manaos = new constructorCiudades("Manaos","MAN","icon-avion","Brasil", "Eduardo Gomes Intl");
const rioDeJaneiro = new constructorCiudades("Rio de Janeiro","RIO","icon-avion","Brasil", "Todos los aeropuertos");
const salvadorDeBahia = new constructorCiudades("Salvador de Bahia","SAB","icon-avion","Brasil", "Luís Eduardo Magalhães Intl");
const fernandoDeNoronha = new constructorCiudades("Fernando de Noronha","FER","icon-avion","Brasil","Fernando de Noronha");
const brasil = new constructorCiudades("Brasil","BRS","icon-avion","","Pais");
//argentina
const bariloche = new constructorCiudades ("Bariloche","BRC","icon-avion","Argentina","Teniente L. Candelaria");
const salta = new constructorCiudades ("Salta","SAL","icon-avion","Argentina","Gral. Guemes");
const tucuman = new constructorCiudades ("Tucuman","TUC","icon-avion","Argentina","Teniente B. Matienzo");
const misiones = new constructorCiudades ("Cataratas del Iguazu","CAT","icon-avion","Argentina","Carlos E. Krause");
const tierraDelFuego = new constructorCiudades ("Tierra Del Fuego","TDF","icon-avion","Argentina","Gob. Ramon Trejo");
const tandil = new constructorCiudades ("Tandil","TAN","icon-avion","Argentina","Aeropuerto de Tandil Nac.");
const marDelPlata = new constructorCiudades ("Mar Del Plata","MDP","icon-avion","Argentina","Astor Piazzolla intl");

const paises = [grecia,inglaterra,estadosUnidos,colombia,paisesBajos,italia,mexico,japon,bariloche,salta,tucuman,
misiones,tierraDelFuego,tandil,marDelPlata,manaos,rioDeJaneiro,salvadorDeBahia,fernandoDeNoronha,
milan,roma,turin,genova,venecia,ciudadDeMexico,monterrey,culiacan,veracruz,playaDelCarmen,hiroshima,osaka,
nagoya,tokio,atenas,santorini,delfos,creta,londres,manchester,birmingham,liverpool,newYork,chicago,dallas,
filadelfia,miami,losAngeles, bogota, cali,medellin,barranquilla,amsterdam,roterdam,milan,roma,turin,genova,venecia];

function destinos(){
   for (let ciudades of paises){      
        const container = document.getElementsByClassName('destinos-container');
        const hijo = document.createElement('div');
        hijo.className = 'destino'
        if(ciudades.aeropuerto == "Pais"){
            hijo.innerHTML = "<i class='" + ciudades.icono + "'></i><div><span>" + ciudades.ciudad + ciudades.pais + "</span><span><p>"+ ciudades.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudades.acronimo + "</span>"
        }
        else{
            hijo.innerHTML = "<i class='" + ciudades.icono + "'></i><div><span>" + ciudades.ciudad + ", " + ciudades.pais + "</span><span><p>"+ ciudades.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudades.acronimo + "</span>"
        }
        

        container[0].appendChild(hijo);
        console.log(ciudades.icono);
    }

}
destinos()

// Funcion find aplicada al buscador de Offcanvas Destino



function busqCiudades(){
    let buscador = document.getElementById("input-destino").value;
    console.log(buscador)
    const busqueda = paises.some((ciudad) => ciudad.pais == buscador)
    const busquedaPorCiudad = paises.filter((ciudad) => ciudad.pais == buscador)
    console.log(busquedaPorCiudad)
    if(busqueda == true){ // -------------> CASI LO TENGO, me gustaria que al dar enter se remuevan los elementos anteiores.
        function RemoverElementos(){
            let elementoPadre = document.getElementsByClassName('destinos-container')
            elementoPadre.innerHTML = "";
         }
         RemoverElementos()
        for(let ciudad of busquedaPorCiudad){
            const container = document.getElementsByClassName('destinos-container');
            const hijo = document.createElement('div');
            hijo.className = 'destino'
            hijo.innerHTML = "<i class='" +  "'></i><div><span>" + ciudad.ciudad + ", " + ciudad.pais + "</span><span><p>"+ ciudad.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudad.acronimo + "</span>"

            container[0].appendChild(hijo);
            console.log(ciudad.icono);
        }
        
    }
    else return console.log("no funciona"); 
}



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
