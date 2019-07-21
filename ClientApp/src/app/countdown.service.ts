import { Injectable } from '@angular/core';
import { timer, Observable,interval } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  countDown;
  count = 60;
  constructor() { }
  StartCountDown()
  {
    this.countDown = interval(1000);
    this.countDown = timer(0,1000).subscribe();
    // console.log(this.countDown.subscribe(val => console.log(val)) );
  }
  StopCountDown()
  {

    console.log(this.countDown.subscribe() );
  }

}
