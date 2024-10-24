import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private http: HttpClient) { }

        getPokemonList(): Observable<PokemonResponse> {
          return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon`);
        }

}
