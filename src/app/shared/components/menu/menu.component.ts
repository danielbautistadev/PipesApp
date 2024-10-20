import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  
  public items: MenuItem[] | undefined; // Declaramos una propiedad 'items' de tipo 'MenuItem[]' o 'undefined' para almacenar los elementos del menú.

  constructor(private router: Router) {} // Inyectamos el servicio 'Router' en el constructor del componente para poder navegar entre rutas.

  ngOnInit() {
      this.items = [
          {
            label: 'Pipes Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                // route: '/' // Establecemos la ruta a la que se navegará al hacer clic en este elemento del menú.
                // command: () => this.router.navigate(['/']) // Usamos la función 'navigate' del servicio 'Router' para navegar a la ruta '/' al hacer clic en este elemento del menú.

                routerLink: '/' // Usamos 'routerLink' para navegar a la ruta '/' al hacer clic en este elemento del menú.
              },
              {
                label: 'Numeros',
                icon: 'pi pi-dollar',
                // route: '/numbers' // Establecemos la ruta a la que se navegará al hacer clic en este elemento del menú.
                // command: () => this.router.navigate(['/numbers']) // Usamos la función 'navigate' del servicio 'Router' para navegar a la ruta '/numbers'

                routerLink: '/numbers' // Usamos 'routerLink' para navegar a la ruta '/numbers' al hacer clic en este elemento del menú.
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                // route: '/uncommon' // Establecemos la ruta a la que se navegará al hacer clic en este elemento del menú.
                // command: () => this.router.navigate(['/uncommon']) // Usamos la función 'navigate' del servicio 'Router' para navegar a la ruta '/uncommon' al hacer clic en este elemento del menú.

                routerLink: '/uncommon' // Usamos 'routerLink' para navegar a la ruta '/uncommon' al hacer clic en este elemento del menú.
              }
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Otro elemento',
                icon: 'pi pi-cog'
              }
            ]
          }
      ];
  }
}
