import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponentComponent } from './component/pokemons-list-component/pokemons-list-component.component';
import { PokemonDetailsComponent } from './component/pokemon-details/pokemon-details.component';
import { PokebolasComponent } from './component/pokebolas/pokebolas.component';
import { TablaTiposComponent } from './component/tabla-tipos/tabla-tipos.component';

const routes: Routes = [
  {path: 'pokemon', component: PokemonsListComponentComponent },
  {path : 'pokemon/:id', component : PokemonDetailsComponent , pathMatch : 'full' },
  {path : 'pokeball', component: PokebolasComponent},
  {path : 'pokeball-detail/:id', component : PokemonDetailsComponent  }, 
  {path : 'tablaTipos', component : TablaTiposComponent},
  {path: '', redirectTo: '/pokemon', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
