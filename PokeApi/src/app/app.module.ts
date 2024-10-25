import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './shared/menu/menu.component';
import { PokemonsListComponentComponent } from './component/pokemons-list-component/pokemons-list-component.component';
import { MaterialModule } from './material/material.module';
import { provideHttpClient } from '@angular/common/http';
import { PokemonDetailsComponent } from './component/pokemon-details/pokemon-details.component';
import { PokeballsDetailsComponent } from './component/pokeballs-details/pokeballs-details.component';
import { PokebolasComponent } from './component/pokebolas/pokebolas.component';
import { CardPokeballComponent } from './component/card-pokeball/card-pokeball.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PokemonsListComponentComponent,
    PokemonDetailsComponent,
    PokeballsDetailsComponent,
    PokebolasComponent,
    CardPokeballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }