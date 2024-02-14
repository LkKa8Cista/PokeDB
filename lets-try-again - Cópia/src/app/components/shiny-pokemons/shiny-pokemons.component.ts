import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/pokemon';
import { FormatIdPipe } from 'src/app/pipes/format-id.pipe';

@Component({
  selector: 'app-shiny-pokemons',
  templateUrl: './shiny-pokemons.component.html',
  styleUrls: ['./shiny-pokemons.component.css']
})
export class ShinyPokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 28; 

  constructor(private pokemon: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokes();
  }

  getAllPokes(): void {
    this.pokemon.getAllPokemon()
    .subscribe(pokemons => this.pokemons = pokemons);;
  }

  nextPage(): void {
    this.currentPage++;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getPageItems(): Pokemon[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.pokemons.slice(startIndex, startIndex + this.itemsPerPage);
  }
}

