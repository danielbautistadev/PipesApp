import { Component, OnInit } from '@angular/core';

interface City {
  // Definimos 2 propiedades para la interfaz City: name y code
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // 1. Definimos una propiedad cities que es un array de objetos City o undefined
  cities: City[] | undefined;
  // 2. Definimos una propiedad selectedCity que es un objeto City o undefined
  selectedCity: City | undefined;
  // 3. Definimos el método ngOnInit que se ejecuta cuando se inicializa el componente
  ngOnInit() {
      // 4. Asignamos un array de objetos City a la propiedad cities
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }

}
