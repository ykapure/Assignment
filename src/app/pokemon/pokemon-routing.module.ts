import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'details', component: PokemonDetailsComponent }

  // { path: '', component: PokemonListComponent, children: [
  //   { path: 'details', component: PokemonDetailsComponent }
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }