$("#menuHamburguesa").click(function () {
  $(".menuResponsive").toggle(370).addclass(".mostrar");
});

//Importantisimo!! Faltaba el id
class Producto {
  constructor(id, nombre, stock, precio, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.categoria = categoria;

    this.venta = function (cantidadComprada) {
      this.stock -= cantidadComprada;
      console.log("Se vendieron " + cantidadComprada + " " + " " + this.nombre);
    };
    this.faltaStock = function (cantidadComprada) {
      this.stock < cantidadComprada;
      alert("No tenemos mas unidades, tenemos hasta 10 " + this.nombre);
    };

    this.stockSuficiente = function (stock, precio, cantidadComprada) {
      stock -= cantidadComprada;
      montoApagar += cantidadComprada * precio;
      console.log("te quedan en stock " + stock + " " + this.nombre);
    };
  }
}

const productoA = new Producto(1, "cesto mimbre", 10, 2700, "mimbre");
const productoB = new Producto(2, "bolso rustico", 10, 2250, "tejido");
const productoC = new Producto(3, "atrapa sueños", 10, 1800, "macrame");
const productoD = new Producto(4, "cuadro tres partes", 10, 2700, "cuadro");
const productoE = new Producto(5, "pulsera macrame", 10, 500, "macrame");
const productoF = new Producto(6, "centro de mesa", 10, 2500, "mimbre");
const productoG = new Producto(7, "cuadro naturaleza", 10, 4700, "cuadro");

//No confundir con la clase constructora. Usar minuscula (osea, const productos)
const Productos = [
  productoA,
  productoB,
  productoC,
  productoD,
  productoE,
  productoF,
  productoG,
];

const menorPrecio = Productos.filter((Producto) => Producto.precio <= 1500);
const precioMedio = Productos.filter((Producto) => Producto.precio <= 4000);
const mayorPrecio = Productos.filter((Producto) => Producto.precio >= 4001);

const categoriaMimbre = Productos.filter(
  (Producto) => Producto.categoria == "mimbre"
);
const categoriaTejido = Productos.filter(
  (Producto) => Producto.categoria == "tejido"
);
const categoriaMacrame = Productos.filter(
  (Producto) => Producto.categoria == "macrame"
);
const categoriaCuadro = Productos.filter(
  (Producto) => Producto.categoria == "cuadros"
);

/* Comento para evitar alerts en testeo
let filtroPrecio = parseInt(prompt('Quiere filtrar la lista de productos por precio? \n  Opcion 1 Menos de $1.500 \n Opcion 2 Entre $1.501 y $4.000 \n Opcion 3 Mas de $4.000'));

switch(filtroPrecio){

  case 1:
    console.log(menorPrecio);
    break
  case 2:
    console.log(precioMedio);
    break
  case 3:
    console.log(mayorPrecio);
    break
  default:
    alert('No tenemos mas productos de ese precio');
} 
*/

//deberia ser un array de objetos. Ya lo tenes y se llama "Productos"
let objetos = document.querySelector(".objetos");

//Uso este de prueba
let boton1 = document.querySelector(".btn1");

//Ninguno llama a ningun boton con las clases que marcas. No exite en el html y por ende nunca va a poder hacer nada
/*let boton2 = document.querySelector('.btn2')

let boton3 = document.querySelector('.btn3')

let boton4 = document.querySelector('.btn4')

let boton5 = document.querySelector('.btn5')

let boton6 = document.querySelector('.btn6')

let boton7 = document.querySelector('.btn7')

let boton8 = document.querySelector('.btn8')

let boton9 = document.querySelector('.btn9')
*/

let flagMimbre = 0;
let flagTejido = 0;
let flagMacrame = 0;
let flagCuadro = 0;

let todas = document.querySelector(".objetos");
let Mimbre = document.querySelector(".categoriaMimbre");
let Tejido = document.querySelector(".categoriaTejido");
let Macrame = document.querySelector(".categoriaMacrame");
let Cuadro = document.querySelector(".categoriaCuadro");

boton1.addEventListener("click", function () {
  renderProductos(1);
});

//render productos va afuera, es una funcion apartque que hay que codear. Recibe un unico parametro, el id del objeto
function renderProductos(id) {
  //De nuevo itero para matchear id
  for (let i = 0; i < Productos.length; i++) {
    if (Productos[i].id == id) {
      //matcheo el id mandando con el del producto
      let div = document.getElementById("pruebaCard");
      div.innerHTML = ` 
                      <ul>
                        <li> ID: ${Productos[i].id}  </li>
                        <li> NOMBRE: ${Productos[i].nombre}   </li>
                        <li> STOCK: ${Productos[i].stock}   </li>
                        <li>  PRECIO: ${Productos[i].precio}  </li>
                        <li> CATEGORIA:   ${Productos[i].categoria}   </li>
                      </ul>
      `;
    }
  }
}

/* 

boton5.addEventListener('click', function(){renderProductos("Mimbre, Tejido, Macrame, cuadro")})
boton6.addEventListener('click', function(){renderProductos("Mimbre")})
boton7.addEventListener('click', function(){renderProductos("Tejido")})
boton8.addEventListener('click', function(){renderProductos("Macrame")})
boton9.addEventListener('click', function(){renderProductos("Cuadro")})
*/

/* Comento para evitar prompts y alerts

let filtroCategoria= parseInt(prompt('Quiere filtrar la lista de productos por tipo de articulo? \n  Opcion 1 Articulos de mimbre \n Opcion 2 Articulos Tejidos \n Opcion 3 Articulos de Macrame \n Opcion 4 Cuadros'));

switch(filtroCategoria){

  case 1:
    console.log(categoriaMimbre);
    break
  case 2:
    console.log(categoriaTejido);
    break
  case 3:
    console.log(categoriaMacrame);
    break
  case 4:
    console.log(categoriaCuadro);
    break
  default:
    alert('No tenemos esos productos');
}
 
*/

let montoApagar = 0;
let cantidadComprada;

//Ahora recibe un unico parametro y de ahi accedo a las properties
function compraFinal(producto) {
  let stock = producto.stock;
  let precio = producto.precio;

  let cantidadComprada = parseInt(prompt("¿cuantas unidades?"));
  if (cantidadComprada <= stock) {
    producto.stockSuficiente(stock, precio, cantidadComprada);
    producto.venta(cantidadComprada);
  } else {
    producto.faltaStock(stock);
  }
}
let seguirComprando = prompt("¿Desea comprar? si/no");

while (seguirComprando == "si") {
  let compra = prompt(
    "¿Qué artículo deseas comprar?" +
      "\n1 " +
      Productos[0].nombre +
      "\n2 " +
      Productos[1].nombre +
      "\n3 " +
      Productos[2].nombre +
      "\n4 " +
      Productos[3].nombre +
      "\n5 " +
      Productos[4].nombre +
      "\n6 " +
      Productos[5].nombre +
      "\n7 " +
      Productos[6].nombre
  );

  //Ciclo for que faltaba. Por eso "i" no existia
  //Ojo que ademas usabas la clase Producto en vez de tu array de productos

  for (let i = 0; i < Productos.length; i++) {
    //Siempre matcheo por id
    if (compra == Productos[i].id) {
      compraFinal(Productos[i]); //Con enviar el producto es suficiente, luego accedo a las properties
    }
  }

  seguirComprando = prompt("¿Desea comprar? si/no");
}
