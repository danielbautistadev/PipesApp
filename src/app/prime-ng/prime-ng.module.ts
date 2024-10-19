import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar'; // Importa el módulo MenubarModule de PrimeNG para utilizar el componente Menubar en la aplicación.
import { MenuModule } from 'primeng/menu'; // Importa el módulo MenuModule de PrimeNG para utilizar el componente Menu en la aplicación.

// El objetivo de este módulo es importar los modulos MenubarModule y MenuModule de PrimeNG y exportarlos para que puedan ser utilizados en otros módulos de la aplicación. Esto permite que los componentes Menubar y Menu estén disponibles para ser utilizados en cualquier lugar donde se importe este módulo.

@NgModule({
  exports: [
    MenubarModule,
    MenuModule
  ]
})
export class PrimeNgModule { }
