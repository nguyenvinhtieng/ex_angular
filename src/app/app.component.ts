import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';
  constructor(private pokemonService: PokemonService) {}
  ngOnInit() {
    forkJoin([
      this.pokemonService.getPokemonList(),
    ]).subscribe()
  }
}
