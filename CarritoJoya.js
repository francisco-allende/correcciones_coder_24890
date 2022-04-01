/*
let BaseDatos = [

    {
        id:1,
        nombre:"Collar",
        precio:250,
        imagen:"https://www.pngegg.com/es/png-wzuby"

    },
    {
        id:2,
        nombre:"Anillo",
        precio:500,
        imagen:"https://www.pngegg.com/es/png-zklwn"
    },
    {
        id:3,
        nombre:"Pulsera",
        precio:300,
        imagen:"https://www.pngwing.com/es/free-png-peuwp"
    }
]

let items=document.querySelector('#items');
let carro=[];
let total=0;
let carrito=document.querySelector('#carrito');
let $total=document.querySelector('#total');


function renderizado()
{
    for(let info of BaseDatos)
    {
        let nodo=document.createElement('div');
        nodo.classList.add('card','col-sm-4');

        let nodocardbody=document.createElement('div');
        nodocardbody.classList.add('card-body');

        let nodotitulo=document.createElement('h5');
        nodotitulo.classList.add('titulocarta');
        nodotitulo.textContent=info['nombre'];

        let nodoimagen=document.createElement('img');
        nodoimagen.classList.add('img-fluid');
        nodoimagen.setAttribute('src',info['imagen']);

        let nodoprecio = document.createElement('p');
        nodoprecio.classList.add('card-text');
        nodoprecio.textContent(info['precio']+'$')

        let nodoboton=document.createElement('button');
        nodoboton.classList.add('btn', 'btn-primary');
        nodoboton.textContent='+';
        nodoboton.setAttribute('marcador', info['id']);
        nodoboton.addEventListener('click',anyadircarrito);


        nodocardbody.appendChild(nodoimagen);
        nodocardbody.appendChild(nodotitulo);
        nodocardbody.appendChild(nodoprecio);
        nodocardbody.appendChild(nodoboton);

        nodo.appendChild(nodocardbody);
        items.appendChild(nodo);

    
    }

}


function anyadircarrito()
{
    carrito.push(this.getAttribute('marcador'))
}

*/
