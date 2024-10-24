import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponentComponent } from './component/pokemons-list-component/pokemons-list-component.component';

const routes: Routes = [
  {path: 'pokemon', component: PokemonsListComponentComponent },
  {path: '', redirectTo: '/pokemon', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
