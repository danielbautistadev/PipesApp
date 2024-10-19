import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button'; // 1. Importamos ButtonModule de PrimeNG
import { DropdownModule } from 'primeng/dropdown'; // 2. Importamos DropdownModule de PrimeNG
import { FormsModule } from '@angular/forms'; // 3. Importamos FormsModule para usar ngModel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 4. Importamos BrowserAnimationsModule para habilitar animaciones

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule, // 5. Agregamos ButtonModule a la lista de imports
    DropdownModule, // 6. Agregamos DropdownModule a la lista de imports
    FormsModule, // 7. Agregamos FormsModule a la lista de imports
    BrowserAnimationsModule, // 8. Agregamos BrowserAnimationsModule a la lista de imports
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
