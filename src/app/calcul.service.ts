import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }


  getNumberOf(list:any[], critiria:string, value:any){
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i][critiria] === value) {
        count++;
      }
    }
    return count;
  }

  
}
