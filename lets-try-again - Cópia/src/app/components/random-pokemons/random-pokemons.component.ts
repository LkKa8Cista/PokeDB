import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/pokemon';
import { FormatIdPipe } from 'src/app/pipes/format-id.pipe';


@Component({
  selector: 'app-random-pokemons',
  templateUrl: './random-pokemons.component.html',
  styleUrls: ['./random-pokemons.component.css']
})
export class RandomPokemonsComponent implements OnInit{

  constructor(private pokemon: PokemonService) {}
  pokemons: Pokemon[] = [];


  ngOnInit(): void {
   this.getRandomPokemons();
  }

  getRandomPokemons(): void {
    this.pokemon.getRandomPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }
}
