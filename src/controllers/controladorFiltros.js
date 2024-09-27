import { gastos } from "./DataBaseSimulator.js";

console.log(gastos)

//yo como ciente quisiera ver los gastos mayores a 100000


//Funciones para filtrar datos en los arreglos. aqui se hace una funcion anonima y se xplica que haga un filtro a cada gasto
let filtromonto = gastos.filter(function(gasto){
    return gasto.monto>10000
})

let filtroMenoresde5 = gastos.filter(function(gasto){
    return gasto.monto<5000
})

let filtrotransporte= gastos.filter(function(gasto){
    return gasto.categoria == "transporte"
})

let filtrotroalimentacion= gastos.filter(function(gasto){
    return gasto.categoria == "comida"
})


let filtroentretenimiento= gastos.filter(function(gasto){
    return gasto.categoria == "entretenimiento"
})

//misma funcion en flecha 
 // gastos.filter(gasto => gasto.monto>10000)

 //RUTINA PARA TRAVERSING
 //llama los elementos desde html para poder darles estilos
 let fila=document.getElementById


 //recorrer el arreglo que voy a pintar
 gastos.forEach(function(gasto){


    //RUTINA PARA ACCEDER A LA INFO
 })