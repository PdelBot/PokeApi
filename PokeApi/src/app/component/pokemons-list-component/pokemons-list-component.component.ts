import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonResponse } from '../../interfaces/pokemon.interfaces';
import { PokemonService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemons-list-component',
  templateUrl: './pokemons-list-component.component.html',
  styleUrl: './pokemons-list-component.component.css'
})
export class PokemonsListComponentComponent implements OnInit{

        pokemonList: Pokemon[] = [];

        constructor (private pokemonService : PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(respuesta => {
      this.pokemonList= respuesta.results;
    });
  }

  getPokemonId(url: string): number{

    return parseInt(url.split('/').filter(x => x).pop() || '0');

  };

  createImgUrl(id: number): string{

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  }

}
