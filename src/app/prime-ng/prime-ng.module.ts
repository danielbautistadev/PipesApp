import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';

// El objetivo de este módulo es importar y exportar los módulos de PrimeNG que se utilizarán en la aplicación. Esto facilita la importación de los módulos en otros módulos de la aplicación sin tener que importarlos individualmente en cada uno.

@NgModule({
  exports: [
    MenuModule
  ]
})
export class PrimeNgModule { }
