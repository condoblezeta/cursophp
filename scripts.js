//Ejercicio 1

function validarMayoriaEdad(a,b){
    if(b>=18){
        return alert(a + ' es mayor de edad')
    }
    else{
        return alert(a + ' es menor de edad')
    }
}

var nombre = prompt('Ingrese su nombre: ')
var edad = prompt('Ingrese su edad: ')

validarMayoriaEdad(nombre, edad)





