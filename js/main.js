
function onLoad(){
    loader = document.getElementById("loader");
    loader.classList.add('opacidad');

    document.getElementById("body").style.overflow = "auto";
}

function storageFunction(){
    if(localStorage.getItem("acronimo") !== null){
        boxLlegada = document.getElementById('destino');
        boxLlegada.innerHTML = `<h2 id= viaje-seleccionado>${localStorage.acronimo}</h2><p id=lugar-seleccionado>${localStorage.lugar}</p>`

        console.log("funciona")
    }
    else console.log("no hay guardados");
    if(localStorage.getItem("salida") !== null){
        boxSalida = document.getElementById('salida');
        boxSalida.innerHTML = `<h2 id= salida-seleccionado>${localStorage.salida}</h2><p id=lugar-salida-seleccionado>${localStorage.lugarSalida}</p>`
        boxSalida.style.flexDirection = "column"

        console.log("funciona")
    }
    else console.log("no hay guardados");
}

storageFunction();

// BOTONES SELECCION FECHAS DE VIAJE

porMes = document.getElementById("boton-mes-avion");
porFecha = document.getElementById("boton-fechasespecifica-avion");
fechasCalendario = document.getElementsByClassName("fechas-calendario");
fechasMes = document.getElementsByClassName("fechas-por-mes")

function fechasEspecificas(){
    porFecha.classList.add("fecha-activo");
    porMes.classList.remove("fecha-activo");

    fechasCalendario[0].style.display = "inherit"
    fechasMes[0].style.display = "none"
}
function fechaPorMes(){
    porMes.classList.add("fecha-activo")
    porFecha.classList.remove("fecha-activo")

    fechasCalendario[0].style.display = "none"
    fechasMes[0].style.display = "inherit"
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

    bloquearSuma()
    
    return numeroPersonas;
    
        
}

function menosPersonas(){
    numeroPersonas = numeroPersonas - 1;
    document.getElementById("number-person").textContent = numeroPersonas;
    let down = document.getElementById("down");
    if(numeroPersonas == 1){
        down.style.color = '#E6EAEF';
        down.style.pointerEvents = 'none'
    }
    else if ((numeroPersonas < 10)||(numeroPersonas > 0)){
        down.style.pointerEvents = 'auto';
        let up = document.getElementById("up");
        up.style.pointerEvents = "auto";
        up.style.color = '#5383ec';
    }
    bloquearSuma()
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
    bloquearSuma()
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
    bloquearSuma()
}

function masBebes(){
    numeroBebes = numeroBebes + 1;
    document.getElementById("number-bebes").textContent = numeroBebes;
    if ((numeroBebes > 0)&&(numeroBebes < 8)){
        let downC = document.getElementById("downc");
        downC.style.color = '#5383ec';
        downC.style.pointerEvents = 'auto'

    }
    else if ((numeroBebes == 9)||(numeroBebes == numeroPersonas)){  //-----> Tengo que agregar un condicional que diga "si la cantidad de bebes es igual al numero de pasajeros adultos, se desactive".
        let upC = document.getElementById("upc");                   //-----> Es para evitar que viaje 1 persona con 8 bebes
        upC.style.pointerEvents = "none";
        upC.style.color = '#E6EAEF';
    }
    bloquearSuma()
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
    bloquearSuma()
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
    
    let numeroTotalPasajeros = parseInt(totalAdultos) + parseInt(totalMenores) + parseInt (totalBebes);
    document.getElementById('cantidad-pasajeros').innerHTML = numeroTotalPasajeros +' Pasajeros';

    document.getElementById('cerrar-offcanvas-pasajeros').click();

    return numeroTotalPasajeros
} 
function bloquearSuma(){
    let totalAdultos = document.getElementById("number-person").textContent;
    let totalMenores = document.getElementById("number-menores").textContent;
    let totalBebes = document.getElementById("number-bebes").textContent;
    
    let numeroTotalPasajeros = parseInt(totalAdultos) + parseInt(totalMenores) + parseInt (totalBebes);
    let conjuntoBotonesSuma = [document.getElementById("upc"),document.getElementById("upb"),document.getElementById("up")];
    if(numeroTotalPasajeros >= "9"){             
        conjuntoBotonesSuma.forEach(boton =>{    
            boton.classList.add('boton-inactive')            
        })                                                                                                
    }
    else{
        conjuntoBotonesSuma.forEach(boton =>{
            boton.classList.remove('boton-inactive')
        } )
    };
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
const londres = new constructorCiudades("Londres","ING","icon-ciudad","Inglaterra", "Todos los aeropuertos");
const manchester = new constructorCiudades("Manchester","ING","icon-ciudad","Inglaterra","Todos los aeropuertos");
const birmingham = new constructorCiudades("Birmingham","ING","icon-avion","Inglaterra","Birmingham-West Midlands");
const liverpool = new constructorCiudades("Liverpool","ING","icon-ciudad","Inglaterra","Todos los aeropuertos");
const inglaterra = new constructorCiudades("Inglaterra","ING","icon-banderas","","Pais");
// estados unidos 
const newYork = new constructorCiudades("NewYork","NY","icon-ciudad","Estados Unidos", "Todos los aeropuertos");
const chicago = new constructorCiudades("Chicago","CHI","icon-ciudad","Estados Unidos","Todos los aeropuertos");
const dallas = new constructorCiudades("Dallas","DAL","icon-ciudad","Estados Unidos","Todos los aeropuertos");
const filadelfia = new constructorCiudades("Filadelfia","FIL","icon-ciudad","Estados Unidos","Todos los aeropuertos");
const miami = new constructorCiudades("Miami","MIA","icon-ciudad","Estados Unidos","Todos los aeropuertos");
const losAngeles = new constructorCiudades("Los Angeles","LA","icon-ciudad","Estados Unidos","Todos los aeropuertos");
const estadosUnidos = new constructorCiudades("Estados Unidos","US","icon-banderas","","Pais");
//colombia
const bogota = new constructorCiudades("Bogota","BOG","icon-ciudad","Colombia","Todos los aeropuertos");
const cali = new constructorCiudades("Cali","CA","icon-ciudad","Colombia","Todos los aeropuertos");
const medellin = new constructorCiudades("Medellin","MED","icon-ciudad","Colombia","Todos los aeropuertos");
const barranquilla = new constructorCiudades("Barranquilla","BRQ","icon-avion","Colombia","Ernesto Cortissoz");
const colombia = new constructorCiudades("Colombia","COL","icon-banderas","","Pais");
//holanda
const amsterdam = new constructorCiudades("Amsterdam","AMS","icon-ciudad","Paises Bajos","Todos los aeropuertos");
const roterdam = new constructorCiudades("Roterdam","ROT","icon-avion","Paises Bajos","Aer. Roterdam-La Haya");
const paisesBajos = new constructorCiudades("Paises Bajos","HOL","icon-banderas","","Pais");
//italia
const milan = new constructorCiudades("Milan","MIL","icon-ciudad","Italia","Todos los aeropuertos");
const roma = new constructorCiudades("Roma","ROM","icon-ciudad","Italia","Todos los aeropuertos");
const turin = new constructorCiudades("Turin","TUR","icon-avion","Italia","Aeropuerto Turin-Caselle");
const genova = new constructorCiudades("Genova","GNV","icon-avion","Italia","Aeropuerto Nac Genova");
const venecia = new constructorCiudades("Venecia","VEN","icon-avion","Italia","Marco Polo Intl");
const italia = new constructorCiudades("Italia","ITA","icon-banderas","","Pais");
//mexico
const ciudadDeMexico = new constructorCiudades("Ciudad de Mexico","CMX","icon-ciudad","Mexico", "Todos los aeropuertos");
const monterrey = new constructorCiudades("Monterry","MON","icon-avion","Mexico","Aeropuerto Intl Monterrey");
const culiacan = new constructorCiudades("Culiacan","CUL","icon-avion","Mexico","Aeropuerto Intl Culiacan");
const veracruz = new constructorCiudades("Veracruz","VER","icon-avion","Mexico","Gral Heriberto Jara");
const playaDelCarmen = new constructorCiudades("Playa del Carmen","PDC","icon-avion","Mexico","Playa del Carmen Nac.");
const mexico = new constructorCiudades("Mexico","MEX","icon-banderas","","Pais");
//japon
const hiroshima = new constructorCiudades("Hiroshima","HRS","icon-avion","Japon","Aeropuerto Intl Hiroshima");
const osaka = new constructorCiudades("Osaka","OSK","icon-ciudad","Japon","Todos los aeropuertos");
const nagoya = new constructorCiudades("Nagoya","NAG","icon-avion","Japon","Chūbu Centrair Intl");
const tokio = new constructorCiudades("Tokio","TOK","icon-ciudad","Japon", "Todos los aeropuertos");
const japon = new constructorCiudades("Japon","JPN","icon-banderas","","Pais");
//grecia
const atenas = new constructorCiudades("Atenas","ATE","icon-ciudad","Grecia", "Todos los aeropuertos");
const santorini = new constructorCiudades("Santorini","SAN","icon-avion","Grecia","Thira Intl");
const delfos = new constructorCiudades("Delfos","DEL","icon-avion","Grecia","Nea Anchialos National");
const creta = new constructorCiudades("Creta","CRE","icon-avion","Grecia","Heraclion Intl");
const grecia = new constructorCiudades("Grecia","GRE","icon-banderas","","Pais");
// brasil
const manaos = new constructorCiudades("Manaos","MAN","icon-avion","Brasil", "Eduardo Gomes Intl");
const rioDeJaneiro = new constructorCiudades("Rio de Janeiro","RIO","icon-ciudad","Brasil", "Todos los aeropuertos");
const salvadorDeBahia = new constructorCiudades("Salvador de Bahia","SAB","icon-avion","Brasil", "Luís Eduardo Magalhães Intl");
const fernandoDeNoronha = new constructorCiudades("Fernando de Noronha","FER","icon-avion","Brasil","Fernando de Noronha");
const brasil = new constructorCiudades("Brasil","BRS","icon-banderas","","Pais");
//argentina
const bariloche = new constructorCiudades ("Bariloche","BRC","icon-avion","Argentina","Teniente L. Candelaria");
const salta = new constructorCiudades ("Salta","SAL","icon-avion","Argentina","Gral. Guemes");
const tucuman = new constructorCiudades ("Tucuman","TUC","icon-avion","Argentina","Teniente B. Matienzo");
const misiones = new constructorCiudades ("Cataratas del Iguazu","CAT","icon-avion","Argentina","Carlos E. Krause");
const tierraDelFuego = new constructorCiudades ("Tierra Del Fuego","TDF","icon-avion","Argentina","Gob. Ramon Trejo");
const tandil = new constructorCiudades ("Tandil","TAN","icon-avion","Argentina","Aeropuerto de Tandil Nac.");
const marDelPlata = new constructorCiudades ("Mar Del Plata","MDP","icon-avion","Argentina","Astor Piazzolla intl");
const buenosAires = new constructorCiudades ("Buenos Aires","BUE","icon-avion","Argentina","Eseiza");
const buenosAiresA = new constructorCiudades ("Buenos Aires","BUE","icon-avion","Argentina","Aeroparque");

const argentina = [bariloche, salta,tucuman, misiones, tierraDelFuego,tandil,marDelPlata, buenosAires, buenosAiresA]

const paises = [grecia,inglaterra,estadosUnidos,colombia,paisesBajos,italia,mexico,japon,bariloche,salta,tucuman,
misiones,tierraDelFuego,tandil,marDelPlata,manaos,rioDeJaneiro,salvadorDeBahia,fernandoDeNoronha,
milan,roma,turin,genova,venecia,ciudadDeMexico,monterrey,culiacan,veracruz,playaDelCarmen,hiroshima,osaka,
nagoya,tokio,atenas,santorini,delfos,creta,londres,manchester,birmingham,liverpool,newYork,chicago,dallas,
filadelfia,miami,losAngeles, bogota, cali,medellin,barranquilla,amsterdam,roterdam,milan,roma,turin,genova,venecia];


function mezclarArrayPaises(paises){
    paises.sort(()=> Math.random() - 0.5);
}
mezclarArrayPaises(paises);

const container = document.getElementsByClassName('destinos-container');

h2Destino = document.getElementById('viaje-seleccionado');
boxDestino = document.getElementById('destino');
lugarDestino = document.getElementById("lugar-seleccionado");

function guardarDatos(){
    localStorage.setItem("acronimo", document.getElementById("viaje-seleccionado").textContent); // Guardo los elementos como datos en el storage
    localStorage.setItem("lugar", document.getElementById("lugar-seleccionado").textContent);
    localStorage.setItem("salida", document.getElementById("salida-seleccionado").textContent)
    localStorage.setItem("lugarSalida", document.getElementById("lugar-salida-seleccionado").textContent)
   }

function destinos(){
   for (let ciudades of paises){      
        const hijo = document.createElement('div');
        hijo.className = 'destino' 
        if(ciudades.aeropuerto == "Pais"){                    

            hijo.innerHTML = "<i class='" + ciudades.icono + "'></i><div><span>" + ciudades.ciudad + ciudades.pais + "</span><span><p>"+ ciudades.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudades.acronimo + "</span>"
        }
        else{
            hijo.innerHTML = "<i class='" + ciudades.icono + "'></i><div><span>" + ciudades.ciudad + ", " + ciudades.pais + "</span><span><p>"+ ciudades.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudades.acronimo + "</span>"
        }

        hijo.onclick = function() {
            boxDestino.style.display = "flex";
            boxDestino.style.flexDirection = "column";
            boxDestino.style.justifyContent = "center";
            boxDestino.style.alignItems = "center";
            boxDestino.style.gap = "0";
            boxDestino.style.padding = "10px";
            if(ciudades.aeropuerto == "Pais"){                    

                boxDestino.innerHTML = "<h2 id= viaje-seleccionado>" + ciudades.acronimo + "</h2><p id=lugar-seleccionado>" + ciudades.ciudad + ciudades.pais + "</p>";
            }
            else{
                boxDestino.innerHTML = "<h2 id= viaje-seleccionado>" + ciudades.acronimo + "</h2><p id=lugar-seleccionado>" + ciudades.ciudad + ", " + ciudades.pais + "</p>";
            }
            document.getElementById('cerrar-offcanvas-destino').click();
            guardarDatos();    
            lugarDestino.style.textAlign = "center"
             
                      
             }  

        container[0].appendChild(hijo);
    }

}

destinos()

// Funcion find aplicada al buscadorDestino de Offcanvas Destino

function busqCiudades(){
    let buscadorDestino = document.getElementById("input-destino").value;
    const busqueda = paises.some((ciudad) => ciudad.pais == buscadorDestino)
    const busquedaPorCiudad = paises.filter((ciudad) => ciudad.pais == buscadorDestino)
    if(busqueda == true){
        container[0].innerHTML = " ";
        for(let ciudad of busquedaPorCiudad){
            const hijo = document.createElement('div');
            hijo.className = 'destino';

            if(ciudad.aeropuerto == "Pais"){                    

                hijo.innerHTML = "<i class='" + ciudad.icono +  "'></i><div><span>" + ciudad.ciudad + ciudad.pais + "</span><span><p>"+ 
                ciudad.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudad.acronimo + "</span>";
            }
            else{
                hijo.innerHTML = "<i class='" + ciudad.icono +  "'></i><div><span>" + ciudad.ciudad + ", " + ciudad.pais + "</span><span><p>"+ 
                ciudad.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudad.acronimo + "</span>";
            }
            hijo.onclick = function() {     
                boxDestino = document.getElementById('destino');
                boxDestino.style.display = "flex";
                boxDestino.style.flexDirection = "column";
                boxDestino.style.justifyContent = "center";
                boxDestino.style.alignItems = "center";
                boxDestino.style.gap = "0";
                boxDestino.style.padding = "10px";
                if(ciudad.aeropuerto == "Pais"){                    

                    boxDestino.innerHTML = "<h2 id= viaje-seleccionado>" + ciudad.acronimo + "</h2><p id=lugar-seleccionado>" + ciudad.ciudad + ciudad.pais + "</p>";
                }
                else{
                    boxDestino.innerHTML = "<h2 id= viaje-seleccionado>" + ciudad.acronimo + "</h2><p id=lugar-seleccionado>" + ciudad.ciudad + ", " + ciudad.pais + "</p>";
                }
                h2Destino = document.getElementById('viaje-seleccionado');
                h2Destino.style.fontSize = "32px"
                h2Destino.style.color = "#2d384c"
                h2Destino.style.margin = "0"


                guardarDatos();     

                document.getElementById('cerrar-offcanvas-destino').click();
                }  

            container[0].appendChild(hijo);
        }
        
    }
    else return console.log("no funciona"); 
}

// Funcion find aplicada al buscadorSalida de Offcanvas Salida

function busqCiudadesSalida(){
    let buscadorDestino = document.getElementById("input-salida").value;
    const busqueda = paises.some((ciudad) => ciudad.pais == buscadorDestino)
    const busquedaPorCiudad = paises.filter((ciudad) => ciudad.pais == buscadorDestino)
    if(busqueda == true){
        const containerSalida = document.getElementsByClassName('salida-container')
        containerSalida[0].innerHTML = " ";
        for(let ciudad of busquedaPorCiudad){
            const hijo = document.createElement('div');
            hijo.className = 'destino'
            hijo.innerHTML = "<i class='" + ciudad.icono +  "'></i><div><span>" + ciudad.ciudad + ", " + ciudad.pais + "</span><span><p>"+ 
            ciudad.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudad.acronimo + "</span>";
            hijo.onclick = function() {     
                boxDestino = document.getElementById('salida');
                boxDestino.style.display = "flex";
                boxDestino.style.flexDirection = "column";
                boxDestino.style.justifyContent = "center";
                boxDestino.style.alignItems = "center";
                boxDestino.style.gap = "0";
                boxDestino.style.padding = "10px";
                boxDestino.innerHTML = "<h2 id= salida-seleccionado>" + ciudad.acronimo + "</h2><p id=lugar-salida-seleccionado>" + ciudad.ciudad + ", " + ciudad.pais + "</p>";
                h2Destino = document.getElementById('salida-seleccionado');
                h2Destino.style.fontSize = "32px"
                h2Destino.style.color = "#2d384c"
                h2Destino.style.margin = "0"


                guardarDatos();     

                document.getElementById('cerrar-offcanvas-fechas').click();
                }  

            containerSalida[0].appendChild(hijo);
        }
        
    }
    else return console.log("no funciona"); 
}

// Funcion para el lugar de salida == destino 

function salida(){ //----> Busca solo en el array de Argentina
    const container = document.getElementsByClassName('salida-container');
    for (let ciudades of argentina){      
         const hijo = document.createElement('div');
         hijo.className = 'destino'
         hijo.onclick = function() {     
             boxSalida = document.getElementById('salida');
             boxSalida.style.display = "flex";
             boxSalida.style.flexDirection = "column";
             boxSalida.style.justifyContent = "center";
             boxSalida.style.alignItems = "center";
             boxSalida.style.gap = "0";
             boxSalida.style.padding = "10px";
             boxSalida.innerHTML = "<h2 id= salida-seleccionado>" + ciudades.acronimo + "</h2><p id='lugar-salida-seleccionado'>" + ciudades.ciudad + ", " + ciudades.pais + "</p>";
             document.getElementById('cerrar-offcanvas-fechas').click();
             guardarDatos();     
           }   
         ciudades.aeropuerto == "Pais" ?      // if         
         hijo.innerHTML = "<i class='" + ciudades.icono + "'></i><div><span>" + ciudades.ciudad + ciudades.pais + "</span><span><p>"+ ciudades.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudades.acronimo + "</span>"
         : //else
         hijo.innerHTML = "<i class='" + ciudades.icono + "'></i><div><span>" + ciudades.ciudad + ", " + ciudades.pais + "</span><span><p>"+ ciudades.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudades.acronimo + "</span>";
         
         
 
         container[0].appendChild(hijo);
     }
 }
 
 salida()



 //BOTON PARA CAMBIAR DE LADO LA SALIDA Y LA LLEGADA
estadoBoton = 0;


function cambiarDeLadoBotonesBox(){
    let llegada = document.getElementById('destino');
    let Salida = document.getElementById('salida');
    if (estadoBoton == 0){
        estadoBoton = estadoBoton + 1;
        Salida.innerHTML = "<i class='icon-despegue' id='popover-salida' type='button' data-bs-trigger='focus hover' tabindex='0' data-bs-container='body' data-bs-toggle='popover' data-bs-placement='top' data-bs-content='Por favor, elija origen'></i><p>Origen</p>" 
        Salida.style.flexDirection = "column";
        if(localStorage.salida !== undefined){
            llegada.innerHTML = `<h2 id='salida-seleccionado'>${localStorage.salida}</h2><p id='lugar-salida-seleccionado'>${localStorage.lugarSalida}</p>`;
            }
            else{
            llegada.innerHTML = `<h2 id='salida-seleccionado'>BUE</h2><p id='lugar-salida-seleccionado'>Buenos Aires</p>`;
        guardarDatos();
    }
        
    }
    else{
        if(localStorage.salida !== undefined){
        Salida.innerHTML = `<h2 id='salida-seleccionado'>${localStorage.salida}</h2><p id='lugar-salida-seleccionado'>${localStorage.lugarSalida}</p>`;
        }
        else{
        Salida.innerHTML = `<h2 id='salida-seleccionado'>BUE</h2><p id='lugar-salida-seleccionado'>Buenos Aires</p>`;

        }
        Salida.style.flexDirection = "column";
        llegada.innerHTML = '<span class="d-inline-block" data-bs-toggle="popover"  data-bs-content="Por favor elija un destino"></span><i class="icon-aterrizaje" id="icono-salida" type="button" class="btn btn-secondary" data-bs-trigger="focus hover" tabindex="0" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Por favor, elija destino"></i><h6>Destino</h6>';
        estadoBoton--;
    }

}


// Funcion para buscar vuelos, y error popover



function buscarVuelos(){
    let viajeSeleccion = document.getElementById("viaje-seleccionado"); 
    let salidaSeleccion = document.getElementById("salida-seleccionado")// trabajar sobre esto
    let claseSeleccion = document.getElementById("clase-box")// trabajar sobre esto
    let pasajerosSeleccion = document.getElementById("cantidad-pasajeros")// trabajar sobre esto
    if ((salidaSeleccion == null)||(viajeSeleccion == null)){
        if(salidaSeleccion == null){
            console.log("debe rellenar los campos para buscar vuelos");
            const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
            const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
            icono = document.getElementById('popover-salida');
            icono.focus();
            icono.style.color = ('red')

        }
        else if(viajeSeleccion == null){
            const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
            const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
            icono = document.getElementById('icono-salida');
            icono.focus();
            icono.style.color = ('red')
            console.log("debe rellenar los campos para buscar vuelos")

        }
        
    }
    else if ((salidaSeleccion != null)&&(viajeSeleccion != null)){
        alert("Usted quiere un viaje a " + viajeSeleccion.textContent + " partiendo desde " + salidaSeleccion.textContent + " en la clase " + claseSeleccion.textContent + " por un total de " + pasajerosSeleccion.textContent + ".")
    }

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


//----> A PARTIR DE ACA ES EL BUSCADOR DE HOTELES


// Funcion find aplicada al busqHotel para offcanvas alojamiento

function busqHotel(){
    let buscadorHotel = document.getElementById("input-alojamiento-hotel").value;
    const busqueda = paises.some((ciudad) => ciudad.pais == buscadorHotel);
    const busquedaPorCiudad = paises.filter((ciudad) => ciudad.pais == buscadorHotel)
    if(busqueda == true){
        const hotelContainer = document.getElementsByClassName("container-hotel");
        hotelContainer[0].innerHTML = "";
        for(let ciudad of busquedaPorCiudad){
            const hijo = document.createElement('div');
            hijo.className = 'hotel'
            hijo.innerHTML = "<i class='icon-gps'></i><p>" + ciudad.ciudad + ", " + ciudad.pais + "</p>";
            hijo.onclick = function() {

                document.getElementById('cerrar-offcanvas-alojamiento-hotel').click();
                }  

            hotelContainer[0].appendChild(hijo);
        }
        
    }
    else return console.log("no funciona"); 
}




// SUMA Y RESTA OFFCANVAS HUESPEDES



function menosMayoresHotel(){
    cantidadAdultosHotel = cantidadAdultosHotel - 1;
    document.getElementById("cantidad-adultos-hoteles").textContent = cantidadAdultosHotel;
    let down = document.getElementById("menos-adultos-hotel");
    if(cantidadAdultosHotel == 1){
        down.style.color = '#E6EAEF';
        down.style.pointerEvents = 'none';
        

    }
    else if ((cantidadAdultosHotel < 6)||(cantidadAdultosHotel > 0)){
        down.style.pointerEvents = 'auto';
        let up = document.getElementById("mas-adultos-hotel");
        up.style.pointerEvents = "auto";
        up.style.color = '#5383ec';
    }
    bloquearSuma()
}




function masMenoresHotel(){
    const edadMenores = document.createElement('div');
    const containerEdad = document.getElementById('adultos-hoteles'); // Si declaro estas variables en el scope global, la funcion no se ejecuta como quiero
    cantidadMenoresHotel = cantidadMenoresHotel + 1;
    document.getElementById("cantidad-niños-hoteles").textContent = cantidadMenoresHotel;
    if ((cantidadMenoresHotel > 0)&&(cantidadMenoresHotel < 6)){
        let down = document.getElementById("menos-niños-hotel");
        down.style.color = '#5383ec';
        down.style.pointerEvents = 'auto';
        // Agregar edad de los menores
        
        edadMenores.className = 'Edad-menores';
        edadMenores.innerHTML = "<p>Edad Menor</p><button class='seleccionar-menores-edad'>15</button>";

        containerEdad.appendChild(edadMenores);
        
    }
    else if (cantidadMenoresHotel == 6){
        let up = document.getElementById("mas-niños-hotel");
        up.style.pointerEvents = "none";
        up.style.color = '#E6EAEF';
    }

    return cantidadMenoresHotel;
}

function menosMenoresHotel(){
    const edadMenores = document.createElement('div');
    const containerEdad = document.getElementById('adultos-hoteles'); 
    cantidadMenoresHotel = cantidadMenoresHotel - 1;
    document.getElementById("cantidad-niños-hoteles").textContent = cantidadMenoresHotel;
    let down = document.getElementById("menos-niños-hotel");
    if(cantidadMenoresHotel == 0){
        down.style.color = '#E6EAEF';
        down.style.pointerEvents = 'none'
    }
    else if ((cantidadMenoresHotel < 6)||(cantidadMenoresHotel > 0)){
        down.style.pointerEvents = 'auto';
        let up = document.getElementById("mas-niños-hotel");
        up.style.pointerEvents = "auto";
        up.style.color = '#5383ec';


        // Quitar edad de los menores

        containerEdad.removeChild(edadMenores);



    }
    bloquearSuma()
}

cantidadAdultosHotel = 1;
cantidadMenoresHotel = 0;



function masMayoresHotel(element){
    cantidadAdultosHotel = cantidadAdultosHotel + 1;
    document.getElementById(`habitacion-adultos-${element}`).textContent = cantidadAdultosHotel;
    if ((cantidadAdultosHotel > 0)&&(cantidadAdultosHotel < 6)){
        let down = document.getElementById("menos-adultos-hotel");
        down.style.color = '#5383ec';
        down.style.pointerEvents = 'auto';
        
    }
    else if (cantidadAdultosHotel == 6){
        let up = document.getElementById("mas-adultos-hotel");
        up.style.pointerEvents = "none";
        up.style.color = '#E6EAEF';
    }

    bloquearSuma()
    
    return cantidadAdultosHotel;
}


// Crear mas habitaciones hotel

cantidadDeHabitaciones = 1


class habitacion {
    constructor(numero, adultos, menores) {
        this.numero  = numero;
        this.adultos  = adultos;
        this.menores = menores;
    }
}

adultosPorHabitacion = [];

function crearHabitacionesHotel(){
    
    cantidadDeHabitaciones = cantidadDeHabitaciones + 1;
    adultosPorHabitacion.push( new habitacion(cantidadDeHabitaciones, 0, 0))

    const hijo = document.createElement('div');
    hijo.className = ('habitaciones-hotel')


    for(objeto of adultosPorHabitacion){
        idButton = "habitacion-adultos-" + objeto.numero;
        hijo.innerHTML = `<div><h5>Habitacion ${cantidadDeHabitaciones}</h5><button>Eliminar habitacion</button></div><div><span><h4>Adultos</h4><p>Desde 18 años</p></span><span class='contador'><i class='bi bi-dash-circle-fill' onclick='menosMayoresHotel()' id='menos-adultos-hotel'></i><h3 id='${element}'>${objeto.adultos}</h3><i class='bi bi-plus-circle-fill' onclick='masMayoresHotel(${idButton})' id='mas-adultos-hotel-${cantidadDeHabitaciones}'></i></span></div><div id='niños-hoteles'><span><h4>Niños</h4><p>Hasta 17 años</p></span><span class='contador'><i class='bi bi-dash-circle-fill' onclick='menosMenoresHotel()' id='menos-niños-hotel'></i><h3 id='cantidad-niños-hoteles'> ${objeto.menores}</h3><i class='bi bi-plus-circle-fill'  onclick='masMenoresHotel()' id='mas-niños-hotel'></i></span></div>`
    }
    
    HuespedesHotelContainer = document.getElementById("huespedes-hotel-container");
    console.log(adultosPorHabitacion);

    HuespedesHotelContainer.appendChild(hijo);
}

// CALENDARIO
diasDeSemana = ["lun","mar","mie",'jue','vie','sab','dom'];

const dt = luxon.DateTime.now();
var justDay = {day: 'numeric'}; // Muestra solo el dia
var justMonth = {month: 'long', year:'numeric'}; // Muestra solo el mes
var monthNumber = {month: 'numeric'}; // Convierte el mes en numero, asi es posible sumarlo en el bucle
let dur = luxon.Duration.fromObject({month:1});
// console.log(dt.toLocaleString(f));  // Muestra 13 de Agosto
// console.log(dur.toLocaleString()) Suma 1 dia y me lo muestra
let now = dt.day
let latter = dt.month // un mes mas adelante
function calendar(father,resultGo, resultBack){
    // Aca voy a agregar las lineas manipular el dom
    contadorCalendarios = 0
    function mesAnterior(){
        previousMonth = dt.minus({month: 1}).toLocaleString(justMonth); // Quita un mes al actual
        previousContainer = document.createElement("div");
        previousContainer.className = 'month-container';
        previousContainer.innerHTML = `<p class="month">${previousMonth}</p>`;
        father.appendChild(previousContainer);
        for(c=1;c<=14;c++){
            daysContainer = document.createElement("div")
            daysContainer.className = 'days-container';
            daysContainer.classList.add('container')
            father.appendChild(daysContainer);
        }
        daysContainer = document.getElementsByClassName("days-container")
        for(s=1;s<=6;s++){
            weeks = document.createElement('div');
            weeks.className = 'row'
            weeks.classList.add('weeks');
            daysContainer[contadorCalendarios].appendChild(weeks)
        }
        weeks = document.getElementsByClassName("weeks"); // Div usado de manera estetica
        for(dias of diasDeSemana){
            week = document.createElement('span')
            week.className = "week";
            week.innerHTML = `<p class="names-of-weeks">${dias}</p>`;
            week.classList.add("col");
            weeks[0].appendChild(week);
        } // ForOF resumido que me transcribe los dias de la semana
        daysOfPreviousMonth = dt.minus({month: 1}).daysInMonth;  // Me dice la cantidad de dias que tiene el mes anterior
        contador = 1;
        for(p = dt.startOf("month").day; p <= daysOfPreviousMonth; p++){  // P de previous ----> Perdon por usar ingles xd
            days = document.createElement("span");
            days.className = 'days';
            days.innerHTML = `<p>${p}</p>`;
           
            weeks[contador].appendChild(days);
            if((p==7)||(p==14)||(p==21)||(p==28)){  // Utilice los dias de la semana para cambiar donde queria cambiar de contenedor
                contador = contador + 1;
            }
           
        }  
       // Creo que aca tengo un error, P me esta trayendo los dias de este mes, y no los del anterior
    }
    mesAnterior()
    contadorCalendarios = contadorCalendarios + 1; // Este contador lo utilizo para cambiar los cuadrados mayores donde va cada mes. Digamos la hoja del calendario
    function mesActual(){
        daysContainer = document.getElementsByClassName("days-container")
        thisMonth = dt.toLocaleString(justMonth);
        Month = document.createElement("div");
        Month.className = 'month-container';
        Month.innerHTML = `<p class="month">${thisMonth}</p>`;
        daysContainer[contadorCalendarios].appendChild(Month);
        for(s=1;s<=6;s++){
            weeks = document.createElement('div');
            weeks.className = 'row'
            weeks.classList.add('weeks');
            daysContainer[1].appendChild(weeks)
        }
        weeks = document.getElementsByClassName("weeks"); // Div usado de manera estetica
        for(dias of diasDeSemana){
            week = document.createElement('span')
            week.className = "week";
            week.innerHTML = `<p class="names-of-weeks">${dias}</p>`;
            week.classList.add("col");
            weeks[6].appendChild(week);
        } // ForOF resumido que me transcribe los dias de la semana
        contador = 1
        for(let start = dt.startOf('month').day; start < dt.day; start++){
            days = document.createElement('span');
            days.className = 'days';
            days.innerHTML = `<p>${start}</p>`;
            weeks[7].appendChild(days);
            if((start==7)||(start==14)||(start==21)||(start==28)){  // Utilice los dias de la semana para cambiar donde queria cambiar de contenedor
                contador = contador + 1;
            }

        }              //      Esto para contar los dias anteriores al actual
        for(now; now < dt.endOf('month').day; now++){
            days = document.createElement('span');
            days.className = 'days';
            days.innerHTML = `<p>${now}</p>`;
            weeks[7].appendChild(days);
            if((now==7)||(now==14)||(now==21)||(now==28)){  // Utilice los dias de la semana para cambiar donde queria cambiar de contenedor
                contador = contador + 1;
            }
            // console.log(now);                //      Esto para contar los dias posteriores al actual
        } 
    }
    mesActual();
    contadorCalendarios = contadorCalendarios + 1;

    contador=1 // Con este contador cambio los meses de dt.plus
    function mesSiguiente(){
        let contadorSemanas = 12 // Con este contador marco donde quiero que se vean los dias (lun,mar,mie,etc..)
        let contadorInicio = 13;
        for(let o = 1; o<=12;o++){
            month = dt.plus({month:contador}) // Con el bucle me va mostrando los nombres de los meses mas el ano.
            nameOfMonth = document.createElement("div");
            nameOfMonth.className = 'month-container';
            nameOfMonth.innerHTML = `<p class="month">${month.toLocaleString(justMonth)}</p>`;
            daysContainer[contadorCalendarios].appendChild(nameOfMonth);
            for(s=1;s<=6;s++){
                weeks = document.createElement('div');
                weeks.className = 'row'
                weeks.classList.add('weeks');
                daysContainer[contadorCalendarios].appendChild(weeks)
            }
            weeks = document.getElementsByClassName("weeks"); // Div usado de manera estetica
            for(dias of diasDeSemana){
                week = document.createElement('span')
                week.className = "week";
                week.innerHTML = `<p class="names-of-weeks">${dias}</p>`;
                week.classList.add("col");
                weeks[contadorSemanas].appendChild(week);
            }
            contadorSemanas = contadorSemanas + 6;
            
            month = dt.plus({month:contador})                                                                   
            startOfTheMonth = month.startOf('month').day;                 
            endOfTheMonth =  month.endOf('month').day;
            for(startOfTheMonth; startOfTheMonth<=endOfTheMonth;startOfTheMonth++){
                days = document.createElement('span');
                days.className = 'days';
                days.innerHTML = `<p>${startOfTheMonth}</p>`;
                weeks[contadorInicio].appendChild(days);
            }
            contadorInicio = contadorInicio + 6;
            console.log(contadorInicio)
            contador = contador + 1;
            contadorCalendarios = contadorCalendarios + 1;
            
          
            // Resolvi el problema de los meses utilizando un contador, pense que no
             // se podia agregar una variable donde va month:.
              // Utilizo esta variable para iniciar el conteo el primero de cada mes.
              // En esta seccion tuve que usar muchos contadores.
        }
    }
     mesSiguiente();

}
padreVuelos = document.getElementById('calendario-vuelos')
resultadoSalidaVuelos = document.getElementById("fecha-de-salida")
resultadoVueltaVuelos = document.getElementById("fecha-de-vuelta")
calendar(padreVuelos,resultadoSalidaVuelos,resultadoVueltaVuelos)

// Lo proximo a hacer es incorporarlo al HTML