

let productos;
let cantidad;
let preciofinal;
let stockproducto;
let respuesta="si";
let prodructoingresado;
const carrito = []
compracollar=0;
compraanillo=0;
compradijes=0;
let acumuladorproductos=0;
let acumuladorunidades=0;
let productoelegido=document.getElementById("productoElegido")






/* --SECCION FUNCIONES--*/

/*<<<FUNCION PARA BUSCAR PRODUCTO>>>*/
function nombreProducto()   
{
    let input1=document.getElementById("input1").value;
    console.log(input1);
    const buscador = listaAccesorio.find(Accesorio=>Accesorio.tipo==input1);
if(buscador == undefined)
{
    
    alert("Vuelva a escribir el producto que sea")

}
else
{
    console.log(buscador);
    alert("Disponemos de ese producto en la tienda.");
}
}
/*<<< FIN FUNCION >>>*/





const listaAccesorio= [accesorioA, accesorioB, accesorioC]



/*<<<FUNCION PARA COMPRAR>>>*/
//recibe el id del producto. Busco matchear id enviado con el del for. Asi accedo correctamente a un objeto dentro de un array
function Compra(id)
{
    for(let i = 0; i < listaAccesorio.length; i++)
    {
        if(id == listaAccesorio[i].id)
        {
            console.log(listaAccesorio[i].id) //muestro que es el mismo
            cantidad=prompt(`Cuantos ${listaAccesorio[i].tipo} desea comprar?`); //borrar prompts en lo posible
            cantidad=parseInt(cantidad);
            listaAccesorio[i].hayStock(cantidad,preciofinal);
            carrito.push(compracollar+1+listaAccesorio[i].tipo); //+ 1? No entiendo que hace

        }
    }


    /* comento evitando prompts
    let prueba = document.getElementById("prueba")
    prueba.innerText="Usted compro.."+ acumuladorunidades +" "+ "unidades"+" "+"con un total de $"+" "+acumuladorproductos;

    let carro=document.getElementById("carro")
    carro.innerText="Su carrito posee "+" "+ carrito + " con un total de "+ acumuladorproductos;
    
    
    respuesta=prompt("desea seguir comprando productos?");
    */

  
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
    const lista=listaAccesorio.map(Accesorio=>Accesorio.tipo)
    alert("Esta es la lista de accesorios disponibles." + lista);

    while(respuesta=="si")
{
productos=prompt("Eliga el prodructo que desea, 1-Collares,2-Dijes,3-Anillos");
productos=parseInt(productos);

Compra()

}
}
/*<<<FIN FUNCIONES INPUTS>>>*/

 


/*-------FIN SECCION FUNCIONES------*/

 
//Aqui seteo al id del boton como el mismo que el del producto. Le agrego el onclick que envia como parametro es emismo id
let catalogo= document.querySelector(`.catalogo`)
for(const producto of listaAccesorio)
{
    let contenedor=document.createElement("div");
    contenedor.innerHTML=
                        `<div class="card">
                        <h2>Tipo:${producto.tipo}</h2>
                        <p>Stock:${producto.stock}</p>
                        <b>Precio:${producto.precio}</b>
                        <button id="${producto.id}" onclick="eventoBtnCompra(${producto.id})">Comprar</button></div>`
                    
     catalogo.appendChild(contenedor);

                    
                  
                        
}

//Se activa solo si clickeas. Antes, al estar en el espacio global, era activado sin que nadie clickee y retornaba undefined
function eventoBtnCompra(id)
{
    console.log(id) //el id del boton es el mismo que el del producto, asi fue seteado
    Compra(id);
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




/* Innecesario con la nueva correccion
let comprarboton = document.getElementById("botoncomprar")
comprarboton.onclick=()=>{console.log(listaAccesorio[2].info());
    cantidad=prompt("Cuantos collares desea comprar?");
    cantidad=parseInt(cantidad);
    listaAccesorio[0].hayStock(cantidad,preciofinal);}

*/
                       

/*-----Guardado de carrito---*/

    const guardardadoLocal = (productoslistado, valor)=>{localStorage.setItem(productoslistado, valor)};
    /*Guardado producto por producto*/
    for(const productos of carrito)
    {
        guardardadoLocal(carrito.push,JSON.stringify(carrito));
    }
    guardardadoLocal("listaCompleta",JSON.stringify(carrito));

    console.log(carrito);
    

