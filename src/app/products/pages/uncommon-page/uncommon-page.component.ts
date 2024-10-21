import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {

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


}
