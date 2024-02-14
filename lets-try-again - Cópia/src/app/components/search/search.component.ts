import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  searchPokemons() {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/search-results'], { queryParams: { q: this.searchQuery } });
    }
  }
}
