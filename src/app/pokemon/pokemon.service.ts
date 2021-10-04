import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient){ }

  getPokemonList(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  }
  
}
