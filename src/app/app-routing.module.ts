import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppWrapperComponent } from './components/app-wrapper/app-wrapper.component';
import { TabsComponent } from './pages/tabs/tabs.component';
const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () => import('./pages/manage/manage.module').then(m => m.ManagePokemonModule),
    // canActivate: [AuthGuardService],
    // canLoad: [AuthGuardService],
  },
  {
    path: "tabs",
    component: TabsComponent
  },
  {
    path: "",
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
