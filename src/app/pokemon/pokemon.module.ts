import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [PokemonListComponent, PokemonDetailsComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    DataTablesModule,
  ]
})
export class PokemonModule { }
