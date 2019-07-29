import { Injectable } from '@angular/core';
import { timer, Observable,interval } from 'rxjs';
import { take, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  Timer;
  countDown;
  count = 60;
  isCountDown = false;
  countDownStatus = "work";
  constructor() { }
  StartCountDown()
  {
    // this.countDown = interval(1000);
    this.Timer = timer(0,1000).subscribe(val =>this.countDown = val);
    // this.countDown = timer(0,1000).subscribe(val=>val);
    // console.log(this.countDown.subscribe(val => console.log(val)) );
    this.isCountDown = true;
  }
  StopCountDown()
  {
    this.Timer.unsubscribe();
    this.count -= this.countDown;
    console.log(this.count);
    this.isCountDown = false;
  }

}
