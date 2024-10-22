import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {

  // i18nSelect

  public name: string = 'Daniel'; // Se declara una variable de tipo string y se le asigna un valor 
  public gender: 'male' | 'female' | 'sin especificar' = 'male'; // Se declara 3 tipos de datos que puede tener la variable, en este caso son 3 strings diferentes
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  } // Se declara un objeto con 2 propiedades, cada una con un valor diferente
  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  } // Se declara un método que cambia el valor de las variables name y gender

  recipientGender: string = 'female'; // Se declara una variable de tipo string y se le asigna un valor 'female' para mujer, 'male' para hombre, 'otros' para no especificar el género
  genderMap: { [key: string]: string } = {
    'male': 'Le enviastes un regalo a él.', 
    'female': 'Le enviastes un regalo a ella.', 
    'otros': 'Le enviastes un regalo.' 
  } // Se declara un objeto con propiedades de tipo string y se le asigna un valor de tipo string, en este caso se usa un objeto para mapear los valores de la variable recipientGender con los valores que se mostrarán en el HTML

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo', 'Melissa', 'Natalia','Daniel','Martín','Juan', 'Pablo','Omar']; // Se declara un array de tipo string y se le asignan valores

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  } // Se declara un objeto con propiedades de tipo string y se le asigna un valor de tipo string, en este caso se usa un objeto para mapear los valores del array clients con los valores que se mostrarán en el HTML, el símbolo # se usa para indicar que se mostrará el valor de la variable clients en ese momento, el símbolo = se usa para indicar que se mostrará el valor que se le asigne a la propiedad, en este caso se usa para indicar que si el valor de la variable clients es igual a 0, 1 o 2 se mostrará el valor de la propiedad que tenga ese valor, y el símbolo other se usa para indicar que si el valor de la variable clients es diferente a 0, 1 o 2 se mostrará el valor de la propiedad other, en este caso se usa para indicar que si el valor de la variable clients es diferente a 0, 1 o 2 se mostrará el valor de la propiedad other, que en este caso es 'tenemos # clientes esperando.'

  public deleteClient(): void  {
    this.clients.shift(); // Se declara un método que elimina el primer elemento del array clients
  }

  

}
