//BOTON PARA CAMBIAR DE LADO LA SALIDA Y LA LLEGADA
function cambiarDeLadoBotonesBox(){
    let Salida = document.getElementById('salida');
    Salida.innerHTML = "<i class='icon-despegue'></i><p>Origen</p>" 
    Salida.style.flexDirection = "column";

    let llegada = document.getElementById('destino');
    llegada.innerHTML = "<h2 id='viaje-seleccionado'>BUE</h2><h6>Buenos Aires</h6>"  //----> Esta funcionando, ahora quiero que si le vuelvo a dar click, 
}                                                                                    //----> el boton vuelva a la fase anterior, supongo que tengo que poner un if
                                                                                     //----> boton == true, sino no se



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
  //---> Resolvi el problema con el corte cuando llega a 9, el unico problema es que tuve que reciclar codigo
  //---> Quise aplicar globalThis pero no se bien como funciona, y no quise meterme con var para no generar problemas.
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
            boxSalida = document.getElementById('destino');
            boxSalida.style.display = "flex";
            boxSalida.style.flexDirection = "column";
            boxSalida.style.justifyContent = "center";
            boxSalida.style.alignItems = "center";
            boxSalida.style.gap = "0";
            boxSalida.style.padding = "10px";
            boxSalida.innerHTML = "<h2 id= viaje-seleccionado>" + ciudades.acronimo + "</h2><p>" + ciudades.ciudad + ", " + ciudades.pais + "</p>";
               h2Salida = document.getElementById('viaje-seleccionado');
               h2Salida.style.fontSize = "32px"
               h2Salida.style.color = "#2d384c"
               h2Salida.style.margin = "0"
               document.getElementById('cerrar-offcanvas-destino').click();
             }  
        
             // MODIFICAR ESTO

        container[0].appendChild(hijo);
    }

}

destinos()

// Funcion find aplicada al buscadorDestino de Offcanvas Destino

function busqCiudades(){
    let buscadorDestino = document.getElementById("input-destino").value;
    let buscadorSalida = document.getElementById("input-salida").value; //---> Tendria que lograr que la misma funcion realice ambas busquedas, en salida y en llegada
    const busqueda = paises.some((ciudad) => ciudad.pais == buscadorDestino)
    const busquedaPorCiudad = paises.filter((ciudad) => ciudad.pais == buscadorDestino)
    if(busqueda == true){ // -------------> CASI LO TENGO, me gustaria que al dar enter se remuevan los elementos anteiores.
        container[0].innerHTML = " ";
        for(let ciudad of busquedaPorCiudad){
            const hijo = document.createElement('div');
            hijo.className = 'destino'
            hijo.innerHTML = "<i class='" + ciudad.icono +  "'></i><div><span>" + ciudad.ciudad + ", " + ciudad.pais + "</span><span><p>"+ 
            ciudad.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudad.acronimo + "</span>";
            hijo.onclick = function() {     
                boxSalida = document.getElementById('destino');
                boxSalida.style.display = "flex";
                boxSalida.style.flexDirection = "column";
                boxSalida.style.justifyContent = "center";
                boxSalida.style.alignItems = "center";
                boxSalida.style.gap = "0";
                boxSalida.style.padding = "10px";
                boxSalida.innerHTML = "<h2 id= viaje-seleccionado>" + ciudad.acronimo + "</h2><p>" + ciudad.ciudad + ", " + ciudad.pais + "</p>";
                h2Salida = document.getElementById('viaje-seleccionado');
                h2Salida.style.fontSize = "32px"
                h2Salida.style.color = "#2d384c"
                h2Salida.style.margin = "0"
                document.getElementById('cerrar-offcanvas-destino').click();
                }  

            container[0].appendChild(hijo);
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
             boxSalida.innerHTML = "<h2 id= salida-seleccionado>" + ciudades.acronimo + "</h2><p>" + ciudades.ciudad + ", " + ciudades.pais + "</p>";
             document.getElementById('cerrar-offcanvas-fechas').click();
           }   
         if(ciudades.aeropuerto == "Pais"){                    
 
             hijo.innerHTML = "<i class='" + ciudades.icono + "'></i><div><span>" + ciudades.ciudad + ciudades.pais + "</span><span><p>"+ ciudades.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudades.acronimo + "</span>"
         }
         else{
             hijo.innerHTML = "<i class='" + ciudades.icono + "'></i><div><span>" + ciudades.ciudad + ", " + ciudades.pais + "</span><span><p>"+ ciudades.aeropuerto +"</p></span></div><span class='acronimo'>" + ciudades.acronimo + "</span>"
         }
         
 
         container[0].appendChild(hijo);
     }
 }
 
 salida()



// Funcion para buscar vuelos

function buscarVuelos(){
    let viajeSeleccion = document.getElementById("viaje-seleccionado")// trabajar sobre esto
    let salidaSeleccion = document.getElementById("salida-seleccionado")// trabajar sobre esto
    let claseSeleccion = document.getElementById("clase-box")// trabajar sobre esto
    let pasajerosSeleccion = document.getElementById("cantidad-pasajeros")// trabajar sobre esto
    if ((salidaSeleccion == null)||(viajeSeleccion == null)){
        if(salidaSeleccion == null){
            const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
            const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

        }
        else if(viajeSeleccion == null){
            const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
            const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
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
