import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient){ }
  baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  getPokemonList(obj: any): Observable<any> {
    let param = new HttpParams();
    for(const key in obj) {
      if (key && obj[key] != null) {
        param = param.append(key, obj[key])
      }
    }
    return this.http.get<any>(this.baseUrl, { params: param});
  }
  
}
