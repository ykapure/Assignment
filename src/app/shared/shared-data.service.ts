import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  // obj: {
  //   searchKey: string,
  //   page: number,
  //   itemsPerPage: number,
  //   activePokemon: {},
  //   activePokemonIndex: number
  // };
  data: any = {};
  private dataShare = new BehaviorSubject(this.data);
  sharedData = this.dataShare.asObservable();
  constructor() { }

  changeSharedData(newData: any) {
    this.dataShare.next(newData);
  }
}
