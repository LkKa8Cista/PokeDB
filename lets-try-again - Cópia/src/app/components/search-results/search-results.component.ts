import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/pokemon';
import { HeaderComponent } from '../header/header.component'; 

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string = '';
  searchResults: Pokemon[] = [];

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'];
      this.searchPokemons();
    });
  }

  searchPokemons() {
    this.pokemonService.getAllPokemon().subscribe(pokemons => {
      this.searchResults = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        pokemon.id.toString().includes(this.searchQuery) ||
        pokemon.types.some(type => type.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    });
  }
}
