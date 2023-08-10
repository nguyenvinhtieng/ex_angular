import { Component, ElementRef, TemplateRef } from '@angular/core';
import { pokemonTypes } from 'src/app/lib/constants/pokemonTypes';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { form } from './form';
import { ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreatePokemonComponent {
  types: string[] = pokemonTypes;
  pokemonForm?: FormGroup;
  pokemonInputImage?: string;
  formErrorMessage: string = "";
  @ViewChild("inputImage") inputImage!: ElementRef;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonForm = form;
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
      forkJoin([
        this.pokemonService.createPokemon(formData),
      ]).subscribe((_) => {
        this.pokemonForm?.reset();
        this.deleteImage();
        alert("Pokemon created successfully");
      })
    }else {
      alert("Please fill all the fields");
    }
  }
}
