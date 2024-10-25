import { Component } from '@angular/core';
import { Item } from '../../interfaces/pokemon-item.interfaces';
import { PokebolasService } from '../../services/pokebolas-service.service';

@Component({
  selector: 'app-pokebolas',
  templateUrl: './pokebolas.component.html',
  styleUrl: './pokebolas.component.css'
})
export class PokebolasComponent {

    pokebolaList: Item  [] = [] 

    constructor(private pokebolaService: PokebolasService) {}

    ngOnInit(): void {
      this.pokebolaService.getPokeball().subscribe(respuesta => {
        this.pokebolaList= respuesta.results;
      });
    }

    getPokeballId(url:string) {
      return parseInt(url.split("/")[6]); 
    }
    
}
 