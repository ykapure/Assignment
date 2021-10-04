import { PokemonService } from './../pokemon.service';
import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemonList: any = [];
  page = 0; 
  itemsPerPage = 20;
  totalItems : any;

  constructor(private service: PokemonService) { 
  }

  ngOnInit(): void {
    this.service.getPokemonList(this.itemsPerPage, this.page).subscribe((response) => {
      this.pokemonList = response.results;
      // this.page = 0;
      this.totalItems = response.count;
    });
  }

  getNextPage(page: any){
    this.service.getPokemonList(this.itemsPerPage, page).subscribe((response) => {
      this.pokemonList = response.results;
      this.totalItems = response.count;
    });
  }

  ngOnDestroy(): void {
  }

}
