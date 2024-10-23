import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform( heroes: Hero[], sortBy?: keyof Hero | '' ): Hero[] {

    console.log({ heroes, sortBy});

    switch ( sortBy ) {
      case 'name':
        return heroes.sort( (a, b) => ( a.name > b.name ) ? 1 : -1 );
      case 'canFly':
        return heroes.sort( (a, b) => ( a.canFly > b.canFly ) ? 1 : -1 );
      case 'color':
        return heroes.sort( (a, b) => ( a.color > b.color ) ? 1 : -1 );
      default:
        return heroes;
    }
  // Explicación: 
  // 1. Definimos el pipe con el decorador @Pipe y le damos un nombre 'sortBy'.
  // 2. Implementamos la interfaz PipeTransform para poder usar el método transform().
  // 3. En el método transform(), recibimos un array de héroes y una propiedad opcional sortBy, que puede ser una de las propiedades de la interfaz Hero o una cadena vacía. Si no se proporciona sortBy, se devuelve el array de héroes sin cambios. Si se proporciona sortBy, se ordena el array de héroes según la propiedad especificada.
  // 4. Usamos un switch para manejar cada caso posible de sortBy. Si la propiedad es 'name', 'canFly' o 'color', ordenamos el array de héroes según esa propiedad. Si se proporciona cualquier otro valor, simplemente devolvemos el array de héroes sin cambios.
  // 5. Para ordenar el array, usamos el método sort() de JavaScript y pasamos una función de comparación que compara las propiedades de los héroes. Si la propiedad de un héroe es mayor que la propiedad del otro héroe, la función devuelve 1, lo que hace que el héroe se coloque después en el array. Si la propiedad de un héroe es menor que la propiedad del otro héroe, la función devuelve -1, lo que hace que el héroe se coloque antes en el array. Si las propiedades son iguales, la función devuelve 0, lo que hace que los héroes se mantengan en el mismo orden en el array.
  

  }

}
