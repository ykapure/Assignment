import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(
    private service: PokemonService,
    private spinner: NgxSpinnerService,
    private route: Router,
    private sharedService: SharedDataService) { 
  }

  pokemon: any = {};
  pokemonDetails: any = {};

  ngOnInit(): void {
    this.sharedService.sharedData.subscribe((sharedObj)=> {
      if (sharedObj) {
        this.pokemon = sharedObj['activePokemon'];
        this.getPokemonDetails(this.pokemon)
      } else {
        this.spinner.hide();
      }
    })
  }

  getPokemonDetails(reqObj: any) {
    const reqParams = reqObj.url;
    this.spinner.show();
    this.service.getPokemonDetails(reqParams).subscribe((response) => {
      this.pokemonDetails = response;
      this.pokemonDetails['imgUrl'] = response.sprites.other['official-artwork'].front_default;
      this.spinner.hide();
    },
    (error) => {
      console.log(error);
      this.spinner.hide();
    });;
  }

  goBack() {
    this.route.navigate(['/pokemon']);
  }
}