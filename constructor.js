//nueva propiedad "id", nos servira para el boton de compra 
function Accesorio (id, tipo,stock,precio){
    this.id = id;
    this.tipo=tipo;
    this.stock=stock;
    this.precio=precio;
    this.info=function(){alert(`Usted eligio este producto ${this.tipo} cuenta con ${this.stock} unidades su precio es de $ ${this.precio}`)}
    this.hayStock = function(cantidad, preciofinal)
    {
      if(cantidad>this.stock)
      {
          alert("No hay suficiente stock del producto.");
      }
      else
      {
          this.stock = this.stock - cantidad;
  
          preciofinal = this.precio * cantidad;
  
          alert("El precio final es:" + preciofinal);
  
          alert("Quedan en stock" + " " + this.stock);
      }
    }
  }

//agrego los ids
const accesorioA=new Accesorio(1, "Collar", 100, 350);
const accesorioB =new Accesorio(2, "Dije", 50, 600);
const accesorioC =new Accesorio(3, "Anillo", 25, 550);