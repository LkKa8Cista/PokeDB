import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumbersService {

  constructor() { }

  getRandomNumbers(): number[]{
    let arr: number[] = [];
    while (arr.length < 5) {
      let r = Math.floor(Math.random() * (386 - 1 + 1) + 1);
      if (!arr.includes(r)) {
        arr.push(r);
      }
    }
    return arr;
  }
}
