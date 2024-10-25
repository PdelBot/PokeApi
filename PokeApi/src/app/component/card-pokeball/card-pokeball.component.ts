import { Component, Input, OnInit } from '@angular/core';
import { ItemDetailResponse } from '../../interfaces/pokemon-item-details.interfaces';
import { PokebolasService } from '../../services/pokebolas-service.service';

@Component({
  selector: 'app-card-pokeball',
  templateUrl: './card-pokeball.component.html',
  styleUrl: './card-pokeball.component.css'
})
export class CardPokeballComponent implements OnInit{
  @Input() pokeballId : number|undefined;
  pokeball : ItemDetailResponse | undefined;

  img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/";

  constructor (private pokeballService : PokebolasService) {}

  ngOnInit(): void {
    this.pokeballService.get1Pokeball(this.pokeballId!).subscribe(a => {

      this.pokeball=a;

    });  
  }

  getImagenPokeball (nombre:string) {
    return `${this.img}${nombre}.png`
  }

}
