document.addEventListener('DOMContentLoaded', () => {

    hacerCards()
});

const planes = [];
let carrito;

let validarCarrito = localStorage.getItem("carrito");

if(validarCarrito == null){
    carrito = [];
    console.log(carrito);

}else{
    carrito = JSON.parse(validarCarrito);
    console.log(carrito);
}

class PlanesDieta {
    constructor(id, nombre, precio, imgen){

        this.id = id;
        this.name = nombre;
        this.price = precio;
        this.img = imgen;

    }
};

//globales 

let cardsHtml = document.getElementById("card");

//resto del codigo
planes.push(new PlanesDieta(1,"Plan de Entrenamiento", 2000, "https://api.nutricionistasofiadiloreto.com.ar/api/tratamientos/imagen/0f272af6-1c8d-4104-471b-08d655720ca3"));
planes.push(new PlanesDieta(2,"Plan Vegetariano", 1000, "https://api.nutricionistasofiadiloreto.com.ar/api/tratamientos/imagen/27e67577-6b6d-49d9-471f-08d655720ca3"));
planes.push(new PlanesDieta(3,"Plan Completo", 4000, "https://api.nutricionistasofiadiloreto.com.ar/api/tratamientos/imagen/dbd574b7-4a2a-4228-65bd-08d7dbf48c15"));


const hacerCards = () => {

    cardsHtml.innerHTML = ``

    for(plan of planes){

        console.warn(plan.name);

        let card = document.createElement('div');
        card.className = "card-list"
        card.innerHTML = `
            <div class="card-image">
                <img src=${plan.img} alt="Anastase Maragos"/>
            </div>
            <div class="card-text"> 
                <h4>${plan.name}</h4>
                <p>$${plan.price}/Mes</p>
                <button id="${plan.id}" onclick="triggerBtnEvent(${plan.id})" class="w3-btn w3-red w3-margin-top w3-round" style="width:100%" >Elegir Plan</button>
            </div>
        `
        cardsHtml.appendChild(card)

    };

};

//tenias dos funciones con el mismo nombre!! Usa una o la otra, ambas son validas

function triggerBtnEvent(id){

    console.log(`Prueba boton: ${id}`);
    agregarAlCarrito(plan);
    
};
//Podes usar esta tambien si asi lo deseas, vas a tener que cambiar algunas cosas
//triggerBtnEvent.addEventListener('click', agregarAlCarrito(plan));

const agregarAlCarrito = (item) => {

    console.log(item);

    let aux = carrito.find(Element => Element.id === item.id);

    if(aux === undefined){
        carrito.push(item);
        alert("Añadido");
        guardarStorage();
    }else{
        alert("Ya esta añadido el plan");
    }

}

const vaciarCarrito = () => {

    carrito = [];

    guardarStorage();
}

const guardarStorage = () => {

    localStorage.setItem("carrito", JSON.stringify(carrito));
}