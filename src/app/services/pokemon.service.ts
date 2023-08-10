import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, map, of } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { ApiService } from './api.service';
import { Pokemon } from '../lib/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonList: Pokemon[] = [];
  isFetching = false;
  constructor(private apiService: ApiService) {

  }

  getPokemonList(isFetchNew?: false): Observable<any> {
    // if(this.pokemonList.length > 0 && !isFetchNew) {
    //   return of(this.pokemonList)
    // }
    return this.apiService.get('/pokemon').pipe(
      map(res => res.data),
      tap((pokemonData) => {
        this.pokemonList = pokemonData;
      }),
    );
  }

  createPokemon(data: any): Observable<any> {
    return this.apiService.postFormData('/pokemon', data).pipe(
      map(res => res.data)
    );
  }

  deletePokemon(id: string): Observable<any> {
    return this.apiService.delete(`/pokemon/${id}`).pipe(
      map(res => res.data)
    );
  }

  getPokemonById(id: string): Observable<any> {
    let myPokemon = this.pokemonList.find(pokemon => pokemon._id == id)
    if(myPokemon) {
      return of(myPokemon)
    }
    return this.apiService.get(`/pokemon/${id}`).pipe(
      map(res => res.data)
    );
  }

  updatePokemon(id: string, data: any): Observable<any> {
    return this.apiService.putFormData(`/pokemon/${id}`, data).pipe(
      map(res => res.data),
      tap((pokemonData) => {
        let index = this.pokemonList.findIndex(pokemon => pokemon._id == id)
        this.pokemonList[index] = pokemonData;
      }),
    );
  }

}
