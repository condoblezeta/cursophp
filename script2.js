//Ejercicio 2

function mayor(a){

    if(a[0]>a[1] && a[0]>a[2]){
        alert('El mayor tiene ' + a[0] + ' años.');

    }else if(a[1]>a[0] && a[1]>a[2]){
        alert('El mayor tiene ' + a[1] + ' años.');

    }else if(a[2]>a[0] && a[2]>a[1]){
        alert('El mayor tiene ' + a[2] + ' años.');
    }
}

var edades = [prompt('Ingrese su edad'),prompt('Ingrese su edad'),prompt('Ingrese su edad')];

mayor(edades)