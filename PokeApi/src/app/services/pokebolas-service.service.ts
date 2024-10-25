import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, ItemListResponse } from '../interfaces/pokemon-item.interfaces';
import { ItemDetailResponse } from '../interfaces/pokemon-item-details.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokebolasService {

  constructor(private http: HttpClient) { }

  getPokeball(): Observable<ItemListResponse> {
  return this.http.get<ItemListResponse>(`https://pokeapi.co/api/v2/item/?limit=16`);
  }

  get1Pokeball(id: number): Observable<ItemDetailResponse> {
    return this.http.get<ItemDetailResponse>(`https://pokeapi.co/api/v2/item/${id}/`);
  }
}

