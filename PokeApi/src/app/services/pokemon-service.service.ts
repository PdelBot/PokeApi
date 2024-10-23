import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../interfaces/pokemon.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {


  constructor(private http: HttpClient) { }

        getPokemonList(): Observable<PokemonListResponse> {
          return this.http.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon`);
        }


}
