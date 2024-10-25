import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResponse } from '../interfaces/pokemon.interfaces';
import { PokemonDetails } from '../interfaces/pokemon-details.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  }

  getPokemonDetails(id: number) {

    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${id}`);

  }

  createImgUrl(id: number): string {

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  }
}
