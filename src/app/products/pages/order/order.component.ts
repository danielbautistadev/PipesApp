import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,

})
export class OrderComponent implements OnInit {
  public name: string = 'erick daniel';

  public orderBy?: keyof Hero; // Definimos una propiedad pública opcional que almacena una clave de la interfaz Hero, y la inicializamos en undefined. Esta propiedad se utiliza para ordenar la lista de héroes por una propiedad específica.

  public isUpperCase: boolean = false; // Definimos una propiedad pública que almacena un valor booleano, y lo inicializamos en false. para poder utilizarlo como argumento por el pipe toggleCase en el HTML.

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    }
  ]

  changeOrder(value: keyof Hero) { 
    this.orderBy = value; // Asignamos el valor del argumento a la propiedad orderBy, para que se ordene la lista de héroes por esa propiedad.
  }

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
