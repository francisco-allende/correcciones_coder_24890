



let productos;
let cantidad;
let preciofinal;
let stockproducto;
let respuesta="si";
let prodructoingresado;
let carrito = []
compracollar=0;
compraanillo=0;
compradijes=0;
let acumuladorproductos;
acumuladorproductos=0;
let acumuladorunidades=0;
let productoelegido=document.getElementById("productoElegido");


/*<<<FUNCION PARA BUSCAR PRODUCTO>>>*/
function nombreProducto()   
{
    let input1=document.getElementById("input1").value;
    console.log(input1);
    const buscador = listaAccesorioB.find(Accesorio=>Accesorio.tipo==input1);
if(buscador == undefined)
{
    
let busqueda= document.querySelector(`.resultadobus`)
for(const producto of listaAccesorioB)
{
    let divisorbusqueda=document.createElement("div");
    divisorbusqueda.innerHTML=
                        `<h1>El producto no fue encontrado, vuelva a intentarlo.</h1>`
                    
    busqueda.appendChild(divisorbusqueda);              
                        
}

}
else
{
    let busqueda= document.querySelector(`.resultadobus`)
    for(const producto of listaAccesorioB)
    {
        let divisorbusqueda=document.createElement("div");
        divisorbusqueda.innerHTML=
                            `<h1>Disponemos stock de este producto.</h1>`
                        
        busqueda.appendChild(divisorbusqueda);             
                            
    }
         
}
}
/*FIN BUSCADOR*/


/*ARRAY DE PRODUCTOS*/
const listaAccesorio = [accesorioA, accesorioB, accesorioC]

let  listaAccesorioB = []

//Faltaba iterar la data del json y cargarla al array de productos
fetch('data.json')
    .then((resp)=>resp.json())
    .then((data)=> //hasta aqui estaba todo bien
                {
                data.forEach(producto =>{ //faltaba este for each
                    listaAccesorioB.push(
                        new Accesorio( //creas un objeto nuevo en cada iteracion y pusheas a tu array
                            producto.id,
                            producto.tipo,
                            producto.stock,
                            producto.precio
                        )
                    )
                })
            }
        );
console.log(listaAccesorioB); //muestro x consola. Antes estaba vacio

//Con este array cargado correctamente, ya puedo crear las cards
//No hay ninguna funcion para printear. Esta tenes que construirla como ya venias haciendo antes del fecth + json


/* CARRITO PARA LISTA*/
function agregaralcarro(id)
{
    for(let i = 0; i < listaAccesorio.length; i++)
{
    if(id==listaAccesorio[i].id)
    {
        carrito.push(listaAccesorio[i])
        console.log(carrito);
        
    }
}
}



function Compra(id)
{
    for(let i = 0; i < listaAccesorio.length; i++)
    {
        if(id == listaAccesorio[i].id)
        {
            console.log(listaAccesorio[i].id) 
            cantidad=prompt(`Cuantos ${listaAccesorio[i].tipo} desea comprar?`);
            cantidad=parseInt(cantidad);
            listaAccesorio[i].hayStock(cantidad,preciofinal);
        

        }
    }
}


/*<<<FUNCION PARA COMPRAR>>>*/

function numeroproducto()
{
    let producto=document.getElementById("inputproductos").value;
    console.log(producto)
    producto=parseInt(producto)
   
    while(respuesta=="si")
    {
switch(producto)
{
    
    case 1:
        console.log(listaAccesorio[0].info());
        cantidad=prompt("Cuantos Collares desea comprar?");
        cantidad=parseInt(cantidad);
        listaAccesorio[0].hayStock(cantidad,preciofinal);
        
        Toastify({
            text: "Producto Agregado!",
            duration: 4000
        }).showToast();
    
        
    

        break;
        case 2:
            console.log(listaAccesorio[1].info());
            cantidad=prompt("Cuantos Dijes desea comprar?");
            cantidad=parseInt(cantidad);
            listaAccesorio[1].hayStock(cantidad,preciofinal);
            
            Toastify({
                text: "Producto Agregado!",
                duration: 4000
            }).showToast();
        

            break;
        case 3:
            
            console.log(listaAccesorio[2].info());
            cantidad=prompt("Cuantos Anillos desea comprar?");
            cantidad=parseInt(cantidad);
            Toastify({
                text: "Producto Agregado!",
                duration: 4000
            }).showToast();
        
            break;

            default:
                
            Toastify({
                    text: "Error, vuelva a ingresar la opcion de la lista",
                    duration: 4000,
                    position:"left" 

                }).showToast();


            
}
   
    respuesta=prompt("desea seguir comprando productos?");


    let prueba = document.getElementById("prueba")
    prueba.innerText="Usted compro.."+ acumuladorunidades +" "+ "unidades"+" "+"con un total de $"+" "+acumuladorproductos;

    let carro=document.getElementById("carro")
    carro.innerText="Su carrito posee "+" "+ carrito + " con un total de "+ acumuladorproductos;
    
    
    
    
}

        

  
}

/*<<<FIN FUNCION>>>*/

/*<<<FUNCIONES PARA INPUTS>>>*/
function mostrar_inputs()
{
  let input1=document.getElementById("input1").value;
  console.log(input1);
}

function menulista()
{
    let listado=document.getElementById("listado")
    listado.innerText="1--Collar 2--Dije 3--Anillo";
    Swal.fire({
        title: 'Lista de Accesiorios',
        text: "1--Collar 2--Dije 3--Anillo",
        icon: 'info',
        confirmButtonText: 'Escriba el numero del que desee'
    })
    
    
}
/*<<<FIN FUNCIONES INPUTS>>>*/

let catalogo = document.querySelector(`.catalogo`)
for(const producto of listaAccesorioB)
{
    let contenedor=document.createElement("div");
    contenedor.innerHTML=
                        `<div class="card">
                        <h2>Tipo:${producto.tipo}</h2>
                        <p>Stock:${producto.stock}</p>
                        <b>Precio:${producto.precio}</b>
                        <button id="${producto.id}" onclick="eventoBtnCompra(${producto.id})">Comprar</button></div>`                    
     catalogo.appendChild(contenedor);
     console.log(listaAccesorioB);

                                    
}




function eventoBtnCompra(id)
{
    console.log(id)
    Compra(id)
    agregaralcarro(id)
    Toastify({
        text: "Producto Agregado!",
        duration: 4000
    }).showToast();


}

const mensajes = [
    {mensaje:"Bienvenido/a a JoyeriaPepe"},
    
]

let bienvenida = document.querySelector(`.bienvenida`)
for(const mensaje of mensajes)
{
    let contenedor=document.createElement("div");
    contenedor.innerHTML=`<h2>${mensaje.mensaje}</h2>`;

                        bienvenida.appendChild(contenedor);                    


}

/*GUARDADO PRODUCTOS*/
localStorage.setItem("ListadoDeProductos",JSON.stringify(listaAccesorio));
