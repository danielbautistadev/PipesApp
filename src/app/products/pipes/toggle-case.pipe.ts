import { Pipe, PipeTransform } from '@angular/core';

// La idea de este pipe es transformar mi nombre en mayúsculas. Por ejemplo, si mi nombre es "Juan", el pipe debería transformarlo en "JUAN". Si el nombre ya está en mayúsculas, debería transformarlo en minúsculas. Por ejemplo, si el nombre es "MARÍA", el pipe debería transformarlo en "maría".

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform { 
    transform(value: string, toUpper: Boolean = false): string {
        // console.log({args});
        // return value.toUpperCase();
        console.log(value, toUpper);
        return ( toUpper ) ? value.toUpperCase() : value.toLowerCase();
    }
}

// Explicación: 
// 1. Importamos las clases Pipe y PipeTransform desde '@angular/core'. Estas clases son necesarias para crear un pipe en Angular.
// 2. Creamos una clase llamada ToggleCasePipe que implementa la interfaz PipeTransform. Esta interfaz requiere que implementemos el método transform, que es el método que se ejecutará cuando usemos el pipe en nuestras plantillas de Angular. Este método recibe un valor de entrada y devuelve un valor de salida transformado. En este caso, el valor de entrada es una cadena de texto (string) y el valor de salida también es una cadena de texto (string).
// 3. Usamos el decorador @Pipe para definir el nombre del pipe. En este caso, el nombre del pipe es 'toggleCase'. Este nombre es el que usaremos en nuestras plantillas de Angular para aplicar la transformación definida en este pipe. Por ejemplo, si queremos transformar una variable llamada 'nombre' en mayúsculas o minúsculas según su estado actual, podríamos hacerlo de la siguiente manera: {{ nombre | toggleCase }}. Esto aplicaría la transformación definida en este pipe a la variable 'nombre'.
// 4. Dentro del método transform, usamos una expresión ternaria para determinar si el valor de entrada debe ser transformado a mayúsculas o minúsculas. Si el segundo argumento del método transform es true, transformamos el valor de entrada a mayúsculas usando el método toUpperCase(). Si el segundo argumento es false o no se proporciona, transformamos el valor de entrada a minúsculas usando el método toLowerCase(). Finalmente, devolvemos el valor transformado como resultado del método transform.