import { Component, TemplateRef } from '@angular/core';
import { forkJoin, tap } from 'rxjs';
import { Pokemon } from 'src/app/lib/interfaces/pokemon.interface';
import { ModalService } from 'src/app/services/modal.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { environment } from 'src/enviroments/environment';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManagePokemonComponent {
  pokemonList: Pokemon[] = [];
  serverEnv = environment.config.url;
  isFetchNew: boolean = true;
  constructor(
    private pokemonService: PokemonService,
    private modalService: ModalService
  ) {}
  ngOnInit() {
    forkJoin([
      this.pokemonService.getPokemonList(),
    ]).subscribe((data) => {
      this.pokemonList = data[0]
    })
  }

  showConfirmDelete(modalTemplate: TemplateRef<any>, pokemonId: string) {
    this.modalService.open(modalTemplate, { title: 'Please confirm delete pokemon!', text: "Delete", isDanger: true })
      .subscribe((_) => {
        this.pokemonService.deletePokemon(pokemonId).subscribe((_) => {
          this.pokemonList = this.pokemonList.filter((pokemon) => pokemon._id !== pokemonId);
        })
      });
  }
}
