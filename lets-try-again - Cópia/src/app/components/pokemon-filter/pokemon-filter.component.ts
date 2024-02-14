import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/pokemon';

@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrls: ['./pokemon-filter.component.css']
})
export class PokemonFilterComponent implements OnInit {

  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  types: string[] = ['normal','fire', 'water','electric', 'grass', 'ice', 'fighting','poison', 'ground','flying', 'psychic','bug','rock','ghost','dragon','dark','steel','fairy']; // Array containing all Pokemon types
  selectedType: string = ''; 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(): void {
    this.pokemonService.getAllPokemon().subscribe(pokemons => {
      this.pokemons = pokemons;
      this.filteredPokemons = this.pokemons.slice();
    });
  }

  applyFilter(): void {
    if (this.selectedType) {
      this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.types.includes(this.selectedType));
    } else {
      this.filteredPokemons = this.pokemons.slice(); 
    }
  }
}
