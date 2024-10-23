import { NgModule } from '@angular/core';

// import { MenuModule } from 'primeng/menu'; // Importa el módulo MenuModule de PrimeNG para utilizar el componente Menu en la aplicación.
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext'; // Importa el módulo InputTextModule de PrimeNG para utilizar el componente InputText en la aplicación.
import { MenubarModule } from 'primeng/menubar'; // Importa el módulo MenubarModule de PrimeNG para utilizar el componente Menubar en la aplicación.
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton'; // Importa el módulo SplitButtonModule de PrimeNG para utilizar el componente SplitButton en la aplicación.
import { ToolbarModule } from 'primeng/toolbar'; // Importa el módulo ToolbarModule de PrimeNG para utilizar el componente Toolbar en la aplicación.


// El objetivo de este módulo es importar los modulos MenubarModule y MenuModule de PrimeNG y exportarlos para que puedan ser utilizados en otros módulos de la aplicación. Esto permite que los componentes Menubar y Menu estén disponibles para ser utilizados en cualquier lugar donde se importe este módulo.

@NgModule({
  exports: [
    // MenuModule
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    SplitButtonModule,
    ToolbarModule,
  ]
})
export class PrimeNgModule { }
