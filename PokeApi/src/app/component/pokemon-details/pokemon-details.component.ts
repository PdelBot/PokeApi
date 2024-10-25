import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from '../../interfaces/pokemon-details.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../../services/pokemon-service.service';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {
  
  pokemonDetails : PokemonDetails = {} as PokemonDetails;

  constructor(private servicioPokemon: PokemonService ,private activatedRoute: ActivatedRoute, private router: Router, private http : HttpClient){}

  idPoke: string | null= ""; 

  abilities: string [] = []

  types: string [] = []
  
  
  ngOnInit(): void {
    
    
    this.idPoke = this.activatedRoute.snapshot.paramMap.get('id');

    this.servicioPokemon.getPokemonDetails(+(this.idPoke!)).subscribe(poke =>{
      this.pokemonDetails = poke;

      this.abilities = this.pokemonDetails.abilities.map(poke => poke.ability.name)

      this.types = this.pokemonDetails.types.map(poke => poke.type.name)
    })

  }

   createUrl (){

    return this.servicioPokemon.createImgUrl(+(this.idPoke!));
   }

   getCries (){
    return this.http.get(this.pokemonDetails.cries.latest)
   }
  
   createUrlSig(){
    const id: number = +(this.idPoke!);
    return this.servicioPokemon.createImgUrl(id+1);
   }

   createUrlAnt(){
    const id: number = +(this.idPoke!);
    return this.servicioPokemon.createImgUrl(id-1);
   }
}
