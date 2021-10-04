import { PokemonService } from './../pokemon.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

pokemonList: any = [];
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject<any>();


  constructor(private service: PokemonService) { 
  }
  
  ngOnInit(): void {
    this.service.getPokemonList().subscribe((response) => {
      this.pokemonList = response.results;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
