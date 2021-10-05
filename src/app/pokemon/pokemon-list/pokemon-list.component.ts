import { PokemonService } from './../pokemon.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemonList: any = [];
  
  currentCard: any;
  currentIndex = -1;
  searchKey: any = null;
  ability: any = null;
  
  page = 1; 
  itemsPerPage: any = 20;
  pageSizes = [10, 20, 50];
  totalItems = 0;

  constructor(private service: PokemonService,private spinner: NgxSpinnerService) { 
  }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getRequestParams(searchKey: any, page: number, itemsPerPage: number): any {
    let params: any = {};

    if (searchKey) {
      params['name'] = searchKey;
      params['ability'] = searchKey;
    }
    if (page) { params['offset'] = page - 1; }
    if (itemsPerPage) { params['limit'] = itemsPerPage; }

    return params;
  }

  getPokemonList() {
    const reqParams = this.getRequestParams(this.searchKey, this.page, this.itemsPerPage);
    this.spinner.show();
    this.service.getPokemonList(reqParams).subscribe((response) => {
      this.pokemonList = response.results;
      this.totalItems = response.count;
      this.spinner.hide();
    },
    (error) => {
      console.log(error);
      this.spinner.hide();
    });;
  }

  pageChange(page: number): void {
    this.page = page;
    this.getPokemonList();
  }

  itemsPerPageChange(event: any): void {
    this.itemsPerPage = event.target.value;
    this.page = 1;
    this.getPokemonList();
  }

  setActiveCard(poke: any, ind: any) {
    console.log(poke);
    console.log(ind);
  }

  ngOnDestroy(): void {
  }

}
