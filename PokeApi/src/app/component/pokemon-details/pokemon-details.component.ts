import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from '../../interfaces/pokemon-details.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {
  
  pokemonDetails : PokemonDetails = {} as PokemonDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http : HttpClient){}

  idPoke: string | null = ""; 

  getPokemonDetails(id: number){

    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${id}`);

  }
  
  ngOnInit(): void {
    /*
    this.activatedRoute.paramMap.subscribe(poke =>{

      this.idPoke = poke.get('id');      

      if (this.idPoke !== null && !isNaN(+this.idPoke)){
        this.getPokemonDetails(+this.idPoke).subscribe(poke: PokemonDetails => {
          this.pokemonDetails = poke;
        })
      }
    })
      */
  }
  
}
