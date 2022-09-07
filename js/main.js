
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
fechasCalendario = document.getElementById("fechas-calendario");
fechasMes = document.getElementById("fechas-por-mes")

function fechasEspecificas(){
    porFecha.classList.add("fecha-activo");
    porMes.classList.remove("fecha-activo");

    fechasCalendario.style.display = "inherit"
    fechasMes.style.display = "none"
}
function fechaPorMes(){
    porMes.classList.add("fecha-activo")
    porFecha.classList.remove("fecha-activo")

    fechasCalendario.style.display = "none"
    fechasMes.style.display = "inherit"
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
    localStorage.setItem("pasajeros", numeroTotalPasajeros)


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



// En vez de crear el array voy a usar una API con todos los lugares



// Array para offcanvas destino / viaje en avion
function constructorCiudades(ciudad, acronimo, icono, pais, aeropuerto){
   this.ciudad = ciudad;
   this.acronimo = acronimo;
   this.icono = icono;
   this.pais = pais;
   this.aeropuerto = aeropuerto;

}
//inglaterra 
const londres = new constructorCiudades("Londres","LON","icon-ciudad","Inglaterra", "Todos los aeropuertos");
const manchester = new constructorCiudades("Manchester","MAN","icon-ciudad","Inglaterra","Todos los aeropuertos");
const birmingham = new constructorCiudades("Birmingham","BHX","icon-avion","Inglaterra","Birmingham-West Midlands");
const liverpool = new constructorCiudades("Liverpool","	LPL","icon-ciudad","Inglaterra","Todos los aeropuertos");
const inglaterra = new constructorCiudades("Inglaterra","ING","icon-banderas","","Pais");
// estados unidos 
const newYork = new constructorCiudades("NewYork","NYC","icon-ciudad","Estados Unidos", "Todos los aeropuertos");
const chicago = new constructorCiudades("Chicago","CHI","icon-ciudad","Estados Unidos","Todos los aeropuertos");
const washington = new constructorCiudades("Washington","WAS","icon-ciudad","Estados Unidos","Todos los aeropuertos");
const atlanta = new constructorCiudades("Atlanta","ATL","icon-ciudad","Estados Unidos","Todos los aeropuertos");
const miami = new constructorCiudades("Miami","MIA","icon-ciudad","Estados Unidos","Todos los aeropuertos");
const losAngeles = new constructorCiudades("Los Angeles","LAX","icon-ciudad","Estados Unidos","Todos los aeropuertos");
const estadosUnidos = new constructorCiudades("Estados Unidos","USA","icon-banderas","","Pais");
//colombia
const bogota = new constructorCiudades("Bogota","BOG","icon-ciudad","Colombia","Todos los aeropuertos");
const cali = new constructorCiudades("Cali","CLO","icon-ciudad","Colombia","Todos los aeropuertos");
const medellin = new constructorCiudades("Medellin","MDE","icon-ciudad","Colombia","Todos los aeropuertos");
const barranquilla = new constructorCiudades("Barranquilla","BAQ","icon-avion","Colombia","Ernesto Cortissoz");
const colombia = new constructorCiudades("Colombia","MDE","icon-banderas","","Pais");
//holanda
const amsterdam = new constructorCiudades("Amsterdam","AMS","icon-ciudad","Paises Bajos","Todos los aeropuertos");
const roterdam = new constructorCiudades("Roterdam","RTM","icon-avion","Paises Bajos","Aer. Roterdam-La Haya");
const paisesBajos = new constructorCiudades("Paises Bajos","AMS","icon-banderas","","Pais");
//italia
const milan = new constructorCiudades("Milan","MIL","icon-ciudad","Italia","Todos los aeropuertos");
const roma = new constructorCiudades("Roma","ROM","icon-ciudad","Italia","Todos los aeropuertos");
const turin = new constructorCiudades("Turin","TRN","icon-avion","Italia","Aeropuerto Turin-Caselle");
const genova = new constructorCiudades("Genova","GOA","icon-avion","Italia","Aeropuerto Nac Genova");
const venecia = new constructorCiudades("Venecia","VCE","icon-avion","Italia","Marco Polo Intl");
const italia = new constructorCiudades("Italia","ROM","icon-banderas","","Pais");
//mexico
const ciudadDeMexico = new constructorCiudades("Ciudad de Mexico","MEX","icon-ciudad","Mexico", "Todos los aeropuertos");
const cancun = new constructorCiudades("Cancun","CJT","icon-avion","Mexico","Aeropuerto Intl Monterrey");
const culiacan = new constructorCiudades("Culiacan","UAC","icon-avion","Mexico","Aeropuerto Intl Culiacan");
const veracruz = new constructorCiudades("Veracruz","VER","icon-avion","Mexico","Gral Heriberto Jara");
const playaDelCarmen = new constructorCiudades("Playa del Carmen","CME","icon-avion","Mexico","Playa del Carmen Nac.");
const mexico = new constructorCiudades("Mexico","MEX","icon-banderas","","Pais");
//japon
const hiroshima = new constructorCiudades("Hiroshima","HRS","icon-avion","Japon","Aeropuerto Intl Hiroshima");
const osaka = new constructorCiudades("Osaka","OSA","icon-ciudad","Japon","Todos los aeropuertos");
const nagoya = new constructorCiudades("Nagoya","NGO ","icon-avion","Japon","Chūbu Centrair Intl");
const tokio = new constructorCiudades("Tokio","TYO ","icon-ciudad","Japon", "Todos los aeropuertos");
const japon = new constructorCiudades("Japon","JPN","icon-banderas","","Pais");
//grecia
const atenas = new constructorCiudades("Atenas","ATH ","icon-ciudad","Grecia", "Todos los aeropuertos");
const santorini = new constructorCiudades("Santorini","JTR","icon-avion","Grecia","Thira Intl");
const rodas = new constructorCiudades("Rodas","RHO","icon-avion","Grecia","Nea Anchialos National");
const tesalonica = new constructorCiudades("Tesalonica","SKG","icon-avion","Grecia","Heraclion Intl");
const grecia = new constructorCiudades("Grecia","ATH","icon-banderas","","Pais");
// brasil
const manaos = new constructorCiudades("Manaos","MAO","icon-avion","Brasil", "Eduardo Gomes Intl");
const rioDeJaneiro = new constructorCiudades("Rio de Janeiro","RIO","icon-ciudad","Brasil", "Todos los aeropuertos");
const salvadorDeBahia = new constructorCiudades("Salvador de Bahia","SSA","icon-avion","Brasil", "Luís Eduardo Magalhães Intl");
const fernandoDeNoronha = new constructorCiudades("Porto Alegre","POA","icon-avion","Brasil","Fernando de Noronha");
const brasil = new constructorCiudades("Brasil","BSB","icon-banderas","","Pais");
//argentina
const bariloche = new constructorCiudades ("Bariloche","BRC","icon-avion","Argentina","Teniente L. Candelaria");
const salta = new constructorCiudades ("Salta","SLA","icon-avion","Argentina","Gral. Guemes");
const tucuman = new constructorCiudades ("Tucuman","TUC","icon-avion","Argentina","Teniente B. Matienzo");
const misiones = new constructorCiudades ("Cataratas del Iguazu","IGR","icon-avion","Argentina","Carlos E. Krause");
const tierraDelFuego = new constructorCiudades ("Tierra Del Fuego","USH","icon-avion","Argentina","Gob. Ramon Trejo");
const tandil = new constructorCiudades ("Tandil","TDL","icon-avion","Argentina","Aeropuerto de Tandil Nac.");
const marDelPlata = new constructorCiudades ("Mar Del Plata","MDQ","icon-avion","Argentina","Astor Piazzolla intl");
const buenosAires = new constructorCiudades ("Buenos Aires","EZE","icon-avion","Argentina","Eseiza");
const buenosAiresA = new constructorCiudades ("Buenos Aires","AEP","icon-avion","Argentina","Aeroparque");

const argentina = [bariloche, salta,tucuman, misiones, tierraDelFuego,tandil,marDelPlata, buenosAires, buenosAiresA]

const paises = [grecia,inglaterra,estadosUnidos,colombia,paisesBajos,italia,mexico,japon,bariloche,salta,tucuman,
misiones,tierraDelFuego,tandil,marDelPlata,manaos,rioDeJaneiro,salvadorDeBahia,fernandoDeNoronha,
milan,roma,turin,genova,venecia,ciudadDeMexico,cancun,culiacan,veracruz,playaDelCarmen,hiroshima,osaka,
nagoya,tokio,atenas,santorini,rodas,tesalonica,londres,manchester,birmingham,liverpool,newYork,chicago,washington,
atlanta,miami,losAngeles,washington,atlanta,barranquilla,amsterdam,roterdam,milan,roma,turin,genova,venecia];


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

// Crear funcion vara variar que quiero que se muestre, asi crear la funcion y alternar
// crear funcion para variar si 

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
            llegada.innerHTML = `<h2 id='salida-seleccionado'>EZE</h2><p id='lugar-salida-seleccionado'>Buenos Aires</p>`;
        guardarDatos();
    }
        
    }
    else{
        if(localStorage.salida !== undefined){
        Salida.innerHTML = `<h2 id='salida-seleccionado'>${localStorage.salida}</h2><p id='lugar-salida-seleccionado'>${localStorage.lugarSalida}</p>`;
        }
        else{
        Salida.innerHTML = `<h2 id='salida-seleccionado'>EZE</h2><p id='lugar-salida-seleccionado'>Buenos Aires</p>`;

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
    let fechaIdaSeleccion = document.getElementById("fecha-ida-seleccion")// trabajar sobre esto
    let fechaVueltaSeleccion = document.getElementById("fecha-vuelta-seleccion")// trabajar sobre esto
    if ((salidaSeleccion == null)||(viajeSeleccion == null)){
        if(salidaSeleccion == null){
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

        }
        
    }
    else if(fechaVueltaSeleccion == null){
        let iconCalendario = document.querySelectorAll('.icon-calendario')
        iconCalendario.forEach((iconos)=>{
            iconos.style.color = ('red')
        })
    }
    else if ((salidaSeleccion != null)&&(viajeSeleccion != null)&&(fechaVueltaSeleccion != null)){
        let tipo = 'ROUND_TRIP';
        botonBuscadorVuelos = document.getElementById('buscar-vuelos')
        if(botonBuscadorVuelos.getAttribute('data-bs-target') == null){
            botonBuscadorVuelos.setAttribute('data-bs-target','#offcanvasBusquedaVuelos')
            botonBuscadorVuelos.setAttribute('data-bs-toggle','offcanvas')
            document.getElementById('buscar-vuelos').click();
        }
        else{
            buscadorVuelos(salidaSeleccion.textContent,viajeSeleccion.textContent,pasajerosEspecial(),tipo,localStorage.fechaDeSalida,localStorage.fechaDeLlegada)
        }
    }

}

// funcion especial para localStorage pasajeros

function pasajerosEspecial(){
    if(localStorage.pasajeros == null)return 1
    else return localStorage.pasajeros
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

const dt = luxon.DateTime.now().setLocale('es');
var justDay = {day: 'numeric'}; // Muestra solo el dia
var justMonth = {month: 'long', year:'numeric'}; // Muestra solo el mes
var dateNumeric = {day:'numeric',month: 'numeric', year:'numeric'}; // Muestra solo el mes
var monthNumber = {month: 'numeric'}; // Convierte el mes en numero, asi es posible sumarlo en el bucle
// console.log(dt.toLocaleString(f));  // Muestra 13 de Agosto
// console.log(dur.toLocaleString()) Suma 1 dia y me lo muestra
let now = dt.day
let latter = dt.month // un mes mas adelante
let contadorFuncion = 1;   // Tuve que poner el contador fuera del bucle porque me creaba contadores para cada hijo, dando interferencia con el HTML.

resultadoSalidaVuelos = document.getElementById("fecha-de-salida")
resultadoVueltaVuelos = document.getElementById("fecha-de-vuelta")
unsavedIdaVuelos = document.getElementById("unsaved-ida")
unsavedVueltaVuelos = document.getElementById("unsaved-vuelta")

function calendar(father){
    // Aca voy a agregar las lineas manipular el dom
    
    contadorCalendarios = 0
    function mesAnterior(){
        previousMonth = dt.minus({month: 1}); // Quita un mes al actual
        previousContainer = document.createElement("div");
        previousContainer.className = 'month-container';
        previousContainer.innerHTML = `<p class="month">${previousMonth.toLocaleString(justMonth)}</p>`;
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
        let contadorMesAnterior = 1;
        acomodarDias(previousMonth,weeks,contadorMesAnterior)
        for(dias of diasDeSemana){
            week = document.createElement('span')
            week.className = "week";
            week.innerHTML = `<p class="names-of-weeks">${dias}</p>`;
            week.classList.add("col");
            weeks[0].appendChild(week);
        } // ForOF resumido que me transcribe los dias de la semana
        daysOfPreviousMonth = dt.minus({month: 1});  // Me dice la cantidad de dias que tiene el mes anterior
        contador = 1;
        for(start = daysOfPreviousMonth.startOf("month").day; start <= daysOfPreviousMonth.daysInMonth; start++){  // P de previous ----> Perdon por usar ingles xd
            fecha = daysOfPreviousMonth.startOf('month').plus({days:start}).minus({days:1});
            CreadorDias(fecha,resultadoSalidaVuelos,resultadoVueltaVuelos,unsavedIdaVuelos,unsavedVueltaVuelos)
        }  
       // Creo que aca tengo un error, P me esta trayendo los dias de este mes, y no los del anterior
    }
    mesAnterior()
    contadorCalendarios = contadorCalendarios + 1; // Este contador lo utilizo para cambiar los cuadrados mayores donde va cada mes. Digamos la hoja del calendario
    function mesActual(){
        daysContainer = document.getElementsByClassName("days-container");
        let mesActual = dt.startOf('month');
        Month = document.createElement("div");
        Month.className = 'month-container';
        Month.innerHTML = `<p class="month">${dt.toLocaleString(justMonth)}</p>`;
        daysContainer[contadorCalendarios].appendChild(Month);
        for(s=1;s<=6;s++){
            weeks = document.createElement('div');
            weeks.className = 'row'
            weeks.classList.add('weeks');
            daysContainer[1].appendChild(weeks)
            
        }
        weeks = document.getElementsByClassName("weeks"); 
        let contadorMesActual = 7;
        acomodarDias(mesActual,weeks,contadorMesActual);   // Div usado de manera estetica
        for(dias of diasDeSemana){
            week = document.createElement('span')
            week.className = "week";
            week.innerHTML = `<p class="names-of-weeks">${dias}</p>`;
            week.classList.add("col");
            weeks[6].appendChild(week);
        } // ForOF resumido que me transcribe los dias de la semana
        start = dt.startOf('month').day;
        contador = 7;
        for(start; start <= dt.endOf('month').day; start++){
            fecha = dt.startOf('month').plus({days:start}).minus({days:1});
            CreadorDias(fecha,resultadoSalidaVuelos,resultadoVueltaVuelos,unsavedIdaVuelos,unsavedVueltaVuelos)

        }              //      Esto para contar los dias anteriores al actual
    }
    mesActual();
    contadorCalendarios = contadorCalendarios + 1;

    contadorMeses=1 // Con este contador cambio los meses de dt.plus
    contador = 13;
    function mesSiguiente(){
        let contadorSemanas = 12 // Con este contador marco donde quiero que se vean los dias (lun,mar,mie,etc..)
        let contadorMesSiguiente = 13;
        for(let o = 1; o<=12;o++){
            month = dt.plus({month:contadorMeses}) // Con el bucle me va mostrando los nombres de los meses mas el ano.
            nameOfMonth = document.createElement("div");
            nameOfMonth.className = 'month-container';
            nameOfMonth.innerHTML = `<p class="month">${month.toLocaleString(justMonth)}</p>`;
            daysContainer[contadorCalendarios].appendChild(nameOfMonth);
           
            for(s=1;s<=addWeeks(month);s++){
                weeks = document.createElement('div');
                weeks.className = 'row'
                weeks.classList.add('weeks');
                daysContainer[contadorCalendarios].appendChild(weeks)
            }
            
            weeks = document.getElementsByClassName("weeks");// Div usado de manera estetica
            
            acomodarDias(month,weeks,contadorMesSiguiente); 
            contadorMesSiguiente = contadorMesSiguiente + addWeeks(month);
            for(dias of diasDeSemana){
                week = document.createElement('span')
                week.className = "week";
                week.innerHTML = `<p class="names-of-weeks">${dias}</p>`;
                week.classList.add("col");
                weeks[contadorSemanas].appendChild(week);
            }
            contadorSemanas = contadorSemanas + addWeeks(month);

          
            fechaMensual = dt.plus({month:contadorMeses})       
                                                                                                                         
            start = fechaMensual.startOf('month').day; 

                            
            endOfTheMonth =  fechaMensual.endOf('month').day;

            
            
            for(start; start<=endOfTheMonth;start++){
                  
                fecha = fechaMensual.startOf('month').plus({day:start}).minus({day:1});      
                CreadorDias(fecha,resultadoSalidaVuelos,resultadoVueltaVuelos,unsavedIdaVuelos,unsavedVueltaVuelos) 
            }
            contadorMeses = contadorMeses + 1;
            contadorCalendarios = contadorCalendarios + 1;

            /*  start = dt.startOf('month').day;
                contador = 7;
                        for(start; start < dt.endOf('month').day; start++){
                        fecha = dt.startOf('month').plus({days:start}).minus({days:1});
                       CreadorDias(fecha,resultadoSalidaVuelos,resultadoVueltaVuelos,unsavedIdaVuelos,unsavedVueltaVuelos)
    
            }              //      Esto para contar los dias anteriores al actual */
            
          
            // Resolvi el problema de los meses utilizando un contador, pense que no
             // se podia agregar una variable donde va month:.
              // Utilizo esta variable para iniciar el conteo el primero de cada mes.
              // En esta seccion tuve que usar muchos contadores.
        }
    }
     mesSiguiente();

}
padreVuelos = document.getElementById('calendario-vuelos')
calendar(padreVuelos)

// Lo proximo a hacer es incorporarlo al HTML


function CreadorDias(fecha,resultGo, resultBack,unsavedGo, unsavedBack){
    let days = document.createElement("span");
    days.className = 'days';
    days.innerHTML = `<p>${start}</p>`;  
    let comparadorFechas = fecha.toFormat('yyLLdd'); 
    let getDays = fecha.toFormat('LLL dd'); // No hace falta guardar las fechas en el HTML para traerlas, cada hijo guarda como variable su fecha
    let getDay = fecha.toFormat('cccc');
    if(comparadorFechas<dt.toFormat('yyLLdd')) days.classList.add('boton-inactive')

days.onclick = function() { // Esta funcion me retorna la fecha en la salida y la llegada
    if(contadorFuncion == 2){
        comparadorLlegada = comparadorFechas; //Utilizo esta variable junto con comparadorSalida para anular la seleccion de tiempo pasado.
        if(comparadorSalida>comparadorLlegada) contadorFuncion = contadorFuncion - 1; 
        else{
            resultBack.innerHTML = `<h4 id="fecha-vuelta-seleccion">${getDays}</h4><p>${getDay}</p>`;
            contadorFuncion = contadorFuncion - 1;
            days.classList.add('select')
            unsavedBack.innerHTML = `<p>VUELTA</p><h4>${getDays}</h4><p>${getDay}</p>`;
            localStorage.setItem("fechaDeLlegada", fecha.toFormat('yyyy-LL-dd'));
            console.log(localStorage.fechaDeLlegada)
        }
    }              
    else if(contadorFuncion == 1){
        let selecciones = document.getElementsByClassName('days');
        for(quitarSelecciones=0;quitarSelecciones<=425;quitarSelecciones++) selecciones[quitarSelecciones].classList.remove('select');
        unsavedGo.innerHTML = `<p>IDA</p><h4>${getDays}</h4><p>${getDay}</p>`;
        resultGo.innerHTML = `<h4  id="fecha-ida-seleccion">${getDays}</h4><p>${getDay}</p>`;
        contadorFuncion = contadorFuncion + 1;
        days.classList.add('select')
        comparadorSalida = comparadorFechas;
        localStorage.setItem("fechaDeSalida", fecha.toFormat('yyyy-LL-dd'));
        console.log(localStorage.fechaDeSalida);
        return comparadorSalida;
    }   
}  
weeks[contador].appendChild(days);    // Problema = cuando ejecuto la funcion, crea las nuevas cajas sobre el mes anterior, porque el contador se reinicia
let contadorReLoco = weeks[contador].children.length; // Respuesta = este contador me dice la cantie queria cambiar de conteneddad de hijos que tiene el primer week, cuando la cantidad es = 7 cambia al 2do week, 3ero,
    if(fecha.day == fecha.endOf('month').day){
        contador = contador + 2;
        return contador;
}
    else if(contadorReLoco == 7){  // Cada vez que el contador se llena, la proxima 
        contador = contador + 1;
        return contador;
}
    else{
        return contador;
} 
}


function acomodarDias(mes,padre,contadorParaAcomodar){
    if(mes.startOf('month').toFormat('cccc')=== 'martes'){
        let days = document.createElement("span");
        days.className = 'days';
        days.innerHTML = "";
        padre[contadorParaAcomodar].appendChild(days)
    }
    else if(mes.startOf('month').toFormat('cccc')== 'miércoles')for(i=0;i<=1;i++){
        let days = document.createElement("span");
        days.className = 'days';
        days.innerHTML = "";
        padre[contadorParaAcomodar].appendChild(days)
    }
    else if(mes.startOf('month').toFormat('cccc')== 'jueves')for(i=0;i<=2;i++){
        let days = document.createElement("span");
        days.className = 'days';
        days.innerHTML = "";
        padre[contadorParaAcomodar].appendChild(days)
    }
    else if(mes.startOf('month').toFormat('cccc')== 'viernes')for(i=0;i<=3;i++){
        let days = document.createElement("span");
        days.className = 'days';
        days.innerHTML = "";
        padre[contadorParaAcomodar].appendChild(days)
    }
    else if(mes.startOf('month').toFormat('cccc')=='sábado')for(i=0;i<=4;i++){
        let days = document.createElement("span");
        days.className = 'days';
        days.innerHTML = "";
        padre[contadorParaAcomodar].appendChild(days)
    }
    else if(mes.startOf('month').toFormat('cccc')== 'domingo')for(i=0;i<=5;i++){
        let days = document.createElement("span");
        days.className = 'days';
        days.innerHTML = "";
        padre[contadorParaAcomodar].appendChild(days)
    }
    else
    return contadorParaAcomodar = contadorParaAcomodar + addWeeks(mes);
}

function addWeeks(mes){
    let numeroDeSemanas = 0;
    if(mes.endOf('month').day >= 28){
        numeroDeSemanas = 6;
        if((mes.startOf('month').toFormat('cccc') == ('sábado'))&&(mes.endOf('month').day == 31)){
            numeroDeSemanas = 7;
            return numeroDeSemanas;
        }
        else if(mes.startOf('month').toFormat('cccc') == ('domingo')){
            numeroDeSemanas = 7;
            return numeroDeSemanas;
        }
        
    return numeroDeSemanas
    }
    else{
        numeroDeSemanas = 5;
    }  
    return numeroDeSemanas;
} 

// Idea para que los dias de la semana se muestren correctamente
// if fecha.startOf('month').toFormat('cccc') == martes{
    // crear elemento div de nombre day x2 
    // y asi sucesivamente, dependiendo de cada dia de la semana.


function cerrarOffcanvas(botonListo, botonCerrar){
    botonListo.onclick = function(){
        botonCerrar.click()
    }
}
botonFechas = document.getElementById('aplicar-fechas')
botonCerrarFechas = document.getElementById('cerrar-offcanvas-salida')
cerrarOffcanvas(botonFechas, botonCerrarFechas);


function buscadorVuelos(lugarSalida,lugarLlegada,pasajeros,tipo,fechaSalida,fechaVuelta){

    let datosVuelo = document.getElementById('datos-vuelo')
    datosVuelo.innerHTML = `${lugarSalida} - ${lugarLlegada}`

    let datosFechaVuelo = document.getElementById('datos-fecha-vuelo')
    datosFechaVuelo.innerHTML = `${fechaSalida} / ${fechaVuelta}`




    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '28f0959a78mshbaaada1f96b2198p1d2e85jsn6640c6807300',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
    
    fetch(`https://priceline-com-provider.p.rapidapi.com/v1/flights/search?itinerary_type=${tipo}&class_type=ECO&location_arrival=${lugarLlegada}&date_departure=${fechaSalida}&location_departure=${lugarSalida}&sort_order=PRICE&price_max=20000&number_of_passengers=${pasajeros}&duration_max=2051&price_min=100&date_departure_return=${fechaVuelta}`, options)
        // formato de fechas ej 2022-11-15
        // classtype = Clase de viaje ej economica o ejecutiva
        .then((response) => response.json())
        .then(informacion => {
            console.log(informacion)
            padreVuelos = document.getElementById('padre-cards-vuelos')

            filtro = informacion.filteredTripSummary.airport

            acumulador = ` `;


            filtro.forEach((comparaciones) => {
                let precio = (comparaciones.lowestTotalFare.amount * 140)
                acumulador +=  `<div class='card-vuelos'>
                <div class="horizontal-vuelo-ida">
                <div>
                    <p>${comparaciones.origin}</p>
                    <span>17.10</span>
                </div>
                <span>
                    <p>20.05</p>
                    <hr>
                    <p>Con escala</p>
                </span>
                <div>
                    <p>${comparaciones.destination}</p>
                    <span>20.05</span>
                </div>
            </div>
            <div class="horizontal-vuelo-vuelta">
                <div>
                    <p>${comparaciones.destination}</p> 
                    <span>14.50</span>
                </div>
                <span>
                    <p>3h 25min</p>
                    <hr>
                    <p>Con escala</p>
                </span>
                <div>
                    <p>${comparaciones.origin}</p>
                    <span>14.15</span>
                </div>
            </div>
                <div class="vertical-vuelo-precio">
                    <h6 class='precio-total-vuelo'>$${parseInt(precio)}</h6>
                    <h5>$${parseInt(precio/1.1)}</H6>
                    <p>Incl. Imp PAIS + AFIP</p>
                </div>
                        </div>`;
            })   
            
            padreVuelos.innerHTML = acumulador
        })
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function PopoversGeneral(deshabilitador){
    deshabilitador.onclick = function(){
        deshabilitador.style.backgroundColor = ('#C2C2C3')
    }
}

huespedesHoteles = document.getElementById('huespedes-hoteles')
PopoversGeneral(huespedesHoteles)

divMayor = document.getElementById('div-mayor')
PopoversGeneral(divMayor)

fechasHoteleria = document.getElementById('fechas-hoteleria')
PopoversGeneral(fechasHoteleria)

mayorAlquileres = document.getElementById('div-mayor-alquileres')
PopoversGeneral(mayorAlquileres)

fechasAlquileres = document.getElementById('fechas-alquileres')
PopoversGeneral(fechasAlquileres)

huespedesAlquileres = document.getElementById('huespedes-alquileres')
PopoversGeneral(huespedesAlquileres)

destinoPaquetes = document.getElementById('destino-paquetes')
PopoversGeneral(destinoPaquetes)

salidaPaquetes = document.getElementById('salida-paquetes')
PopoversGeneral(salidaPaquetes)




