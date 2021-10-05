import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon.service';


@NgModule({
  declarations: [PokemonListComponent, PokemonDetailsComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers:[PokemonService]
})
export class PokemonModule { }
