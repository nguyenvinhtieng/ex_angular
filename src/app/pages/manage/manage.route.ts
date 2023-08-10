import { Routes } from "@angular/router";
import { ManagePokemonComponent } from "./manage.component";
import { CreatePokemonComponent } from "./create/create.component";
import { EditPokemonComponent } from "./edit/edit.component";
export const managePokemonRoutes: Routes = [
  {
    path: '',
    component: ManagePokemonComponent
  },
  {
    path: 'create',
    component: CreatePokemonComponent
  },
  {
    path: 'edit/:id',
    component: EditPokemonComponent
  }
]
