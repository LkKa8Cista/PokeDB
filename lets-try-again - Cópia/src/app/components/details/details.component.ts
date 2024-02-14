import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/pokemon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pokemon?: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService,
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokeService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  playCry(link: string) {
    const audio = new Audio(link);
    audio.play();
  }
}
