import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsModule )
    // 1. El path vacio indica que es la ruta principal de la aplicacion
    // 2. loadChildren: es una funcion que carga de forma perezosa el modulo de productos, es decir, solo se carga cuando se accede a la ruta de productos, no cuando se carga la aplicacion. Esta funcion recibe una funcion que importa el modulo de productos y retorna una promesa que resuelve el modulo de productos.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
