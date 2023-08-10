import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { managePokemonRoutes } from './manage.route';
import { ManagePokemonComponent } from './manage.component';
import { AppWrapperComponent } from 'src/app/components/app-wrapper/app-wrapper.component';
import { CreatePokemonComponent } from './create/create.component';
import { EditPokemonComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    AppWrapperComponent,
    ManagePokemonComponent,
    CreatePokemonComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(managePokemonRoutes),
  ],
})
export class ManagePokemonModule { }
