alert("Alerta desde js")

console.log("Hola desde main.js")

//Código de clase 4
/* 
const nombreProducto = "bondiolas"
const precioUnitario = "3000"

let cantidadDeseada = prompt("Cuantas " + nombreProducto + " quieres comprar?")

function sumarProductos(precioUnitario, cantidadDeseada){
   
    let PrecioTotal = precioUnitario * cantidadDeseada
    console.log("El precio del producto es: " + PrecioTotal)
    
}


sumarProductos(precioUnitario, cantidadDeseada)
*/

//Código de Clase 5
/*
const Productos = ["Queso", "Fiambre", "Bondiola", "Chorizo", "Pan a leña"];

for(let i=0; i<Productos.length; i++){
    console.log("Producto " + (i+1) + ": " + Productos[i]);
}

Productos.pop()

console.log("Nuevo stock después de la venta")

for(let i=0; i<Productos.length; i++){
    console.log("Producto " + (i+1) + ": " + Productos[i]);
} */

//Código de Clase 6
const producto = {
    nombre: "Camiseta",
    precio: "$9.600",
    cantidadDisponible: "30 unidades"
}
producto.categoria = "Vestimenta";
console.log("Producto 1: " + producto.nombre + ", " + "precio: " + producto.precio + ", " + "categoria: " + producto.categoria + ", " + "cantidad: " + producto.cantidadDisponible);

producto.nombre = "Zapatillas";
producto.categoria = "Calzado";

delete producto.cantidadDisponible

console.log("Producto 2: " + producto.nombre + ", " + "precio: " + producto.precio + ", " + "categoria: " + producto.categoria + ", " + "cantidad: Sin stock");
