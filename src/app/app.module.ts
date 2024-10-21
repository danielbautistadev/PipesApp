import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { ButtonModule } from 'primeng/button'; // 1. Importamos ButtonModule de PrimeNG
import { DropdownModule } from 'primeng/dropdown'; // 2. Importamos DropdownModule de PrimeNG
import { FormsModule } from '@angular/forms'; // 3. Importamos FormsModule para usar ngModel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 4. Importamos BrowserAnimationsModule para habilitar animaciones

import { SharedModule } from './shared/shared.module';

// el objetivo de este modulo es importar los componentes que se van a usar en toda la aplicación, en este caso solo importamos el SharedModule que contiene los componentes que se van a usar en toda la aplicación

// Configuracion de las zonas horarias de la aplicación
import LOCALE_es_CO from '@angular/common/locales/es-CO'; // 1. Importamos la configuración de la zona horaria de Colombia

import LOCALE_fr_FR from '@angular/common/locales/fr'; // 1. Importamos la configuración de la zona horaria de Francia

import LOCALE_jp_JP from '@angular/common/locales/ja'; // 1. Importamos la configuración de la zona horaria de Japón

import { registerLocaleData } from '@angular/common'; // 2. Importamos la función registerLocaleData para registrar la configuración de la zona horaria

registerLocaleData(LOCALE_es_CO); // 3. Registramos la configuración de la zona horaria de Colombia
registerLocaleData(LOCALE_fr_FR); // 3. Registramos la configuración de la zona horaria de Francia
registerLocaleData(LOCALE_jp_JP); // 3. Registramos la configuración de la zona horaria de Japón

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ButtonModule, // 5. Agregamos ButtonModule a la lista de imports
    DropdownModule, // 6. Agregamos DropdownModule a la lista de imports
    FormsModule, // 7. Agregamos FormsModule a la lista de imports
    BrowserAnimationsModule, // 8. Agregamos BrowserAnimationsModule a la lista de imports
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' } // 9. Agregamos la configuración de la zona horaria de Colombia a la lista de providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
