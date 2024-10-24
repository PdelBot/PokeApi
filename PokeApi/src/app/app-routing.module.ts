import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponentComponent } from './component/pokemons-list-component/pokemons-list-component.component';
import { PokemonDetailsComponent } from './component/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path: 'pokemon', component: PokemonsListComponentComponent },
  {path : 'pokemon/:id', component : PokemonDetailsComponent , pathMatch : 'full' },
  {path: '', redirectTo: '/pokemon', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
