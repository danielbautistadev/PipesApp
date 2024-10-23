import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,

})
export class OrderComponent implements OnInit {
  public name: string = 'erick daniel';

  public isUpperCase: boolean = false; // Definimos una propiedad pública que almacena un valor booleano, y lo inicializamos en false. para poder utilizarlo como argumento por el pipe toggleCase en el HTML.

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  } // Definimos un método publico que cambia el valor de la propiedad isUpperCase según el valor que tenga actualmente.

  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Update',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Delete',
              icon: 'pi pi-times'
          }
      ];
  }

}
