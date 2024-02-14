import { Injectable } from '@angular/core';
import { Pokemon } from 'src/pokemon';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of, forkJoin } from 'rxjs';
import { MessageService } from './messages.service'; 


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonDataURL= 'https://pokeapi.co/api/v2/pokemon';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getAllPokemon(): Observable<Pokemon[]> {
    const requests: Observable<Pokemon>[] = [];
    for(let i:number = 1; i < 1026; i++ ){
      requests.push(this.getPokemon(i));
    }

    return forkJoin(requests);
  }

  getRandomPokemons(): Observable<Pokemon[]>{
    let arr: number[] = [];
    while (arr.length < 5) {
      let r = Math.floor(Math.random() * (1026 - 1 + 1) + 1);
      if (!arr.includes(r)) {
        arr.push(r);
      }
    }

    const requests: Observable<Pokemon>[] = [];
    for(let i:number = 0; i < arr.length; i++ ){
      requests.push(this.getPokemon(arr[i]));
    }
  
    return forkJoin(requests);
  }

  private mapingInfo(info: any): Pokemon {

    let pok: Pokemon = {
      id: info.id,
      name: info.name,
      height : info.height,
      weight : info.weight,
      types : info.types.map((type: any) => type.type.name),
      spritesP : info.sprites.front_default,
      spritesS : info.sprites.front_shiny,
      cry: info.cries.latest,
    };
    console.log(pok);
    return pok;
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonDataURL}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      map(data => this.mapingInfo(data)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  searchPokemons(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.pokemonDataURL}/${term}`).pipe(
      tap(x => x.length ?
        this.log(`found pokemon matching "${term}"`) :
        this.log(`no pokemon matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemons', []))
    );
  }

}
