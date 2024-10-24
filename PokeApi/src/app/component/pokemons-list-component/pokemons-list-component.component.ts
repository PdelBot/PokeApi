import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from '../../interfaces/pokemon.interfaces';
import { PokemonService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemons-list-component',
  templateUrl: './pokemons-list-component.component.html',
  styleUrl: './pokemons-list-component.component.css'
})
export class PokemonsListComponentComponent implements OnInit{

        pokemonList: PokemonResponse[] = [];

        constructor (private pokemonService : PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(respuesta => {
      this.pokemonList= respuesta.result;
    });
  }
}
