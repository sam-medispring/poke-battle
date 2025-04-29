import {Component, OnInit} from '@angular/core';
import {PokedexServiceService} from '../../core/pokedex/pokedex.service.service';

@Component({
  standalone: true,
  selector: 'app-poke-list',
  providers: [ PokedexServiceService ],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent implements OnInit {
  private pdexService: PokedexServiceService;
  constructor(pdexService: PokedexServiceService) {
    this.pdexService = pdexService;
  }

  ngOnInit() {
    this.pdexService.getPokemons().subscribe(data => {
      console.log(data);
    });
  }
}
