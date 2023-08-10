import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { pokemonTypes } from 'src/app/lib/constants/pokemonTypes';
import { PokemonService } from 'src/app/services/pokemon.service';
import { form } from '../create/form';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/enviroments/environment';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditPokemonComponent {
  types: string[] = pokemonTypes;
  pokemonForm?: FormGroup;
  pokemonInputImage?: string;
  formErrorMessage: string = "";
  pokemonId: string = "";
  @ViewChild("inputImage") inputImage!: ElementRef;
  constructor(private pokemonService: PokemonService, private _route:ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.pokemonForm = form;
    this.pokemonId = this._route.snapshot.paramMap.get('id') || "";
    if(this.pokemonId) {
      this.pokemonService.getPokemonById(this.pokemonId).subscribe((pokemon: any) => {
        if(!pokemon) {
          this.router.navigate(['/manage'])
        }
        this.pokemonForm?.patchValue({
          name: pokemon.name,
          hp: pokemon.hp,
          attack: pokemon.attack,
          defense: pokemon.defense,
          speed: pokemon.speed,
          isLegendary: pokemon.legendary,
          type_1: pokemon.type_1,
          type_2: pokemon.type_2,
          image: pokemon.image
        })
        this.pokemonInputImage = `${environment.config.url}${pokemon.image}`;

      })
    }
  }

  onFileChanged(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      let imgUrl = URL.createObjectURL(file)
      this.pokemonInputImage = imgUrl;
      this.pokemonForm?.patchValue({
        image: file
      })
    }
  }

  deleteImage() {
    this.pokemonInputImage = '';
    this.pokemonForm?.patchValue({ image: '' })
    this.inputImage.nativeElement.value = "";
  }

  onSubmit() {
    if(this.pokemonForm?.valid) {
      let formData = new FormData();
      for(let key in this?.pokemonForm?.value) {
        formData.append(key, this?.pokemonForm?.value[key]);
      }

      this.pokemonService.updatePokemon(this.pokemonId, formData)
      .subscribe((_) => {
        alert("Pokemon updated successfully");
        this.router.navigate(['/manage'])
      })
    }else {
      alert("Please fill all the fields");
    }
  }
}
