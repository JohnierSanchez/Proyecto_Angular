import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PreguntasfComponent } from './pages/preguntasf/preguntasf.component';


const app_routes: Routes = [
  {path: 'home', component: ProductosComponent },
  {path: 'about', component: AboutComponent },
  {path: 'item', component: ItemComponent },
  {path: 'info', component: PreguntasfComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes,{useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 

}
