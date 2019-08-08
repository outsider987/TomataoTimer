import { Injectable } from '@angular/core';
import { timer, Observable,interval } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { TodoService } from './todo.service';




@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  workTime = 60000;
  breakTime = 60000;
  count = 60;
  isCountDown = false;
  countDownStatus = "work";
  countDownTime;
  public ShowCountDownTime = (new Date(this.workTime).getMinutes()< 10 ? '0'+new Date(this.workTime).getMinutes():new Date(this.workTime).getMinutes()) + ':' + (new Date(this.workTime).getSeconds() < 10? '0'+new Date(this.workTime).getSeconds():new Date(this.workTime).getSeconds());
  constructor(public todoService :TodoService) { }
  StartCountDown()
  {

    timer(0,1000).subscribe(val =>this.countDownTime = val);

    this.isCountDown = true;
  }
  StopCountDown(LimitTime:number)
  {

    LimitTime -= this.countDownTime;
    console.log(this.count);
    this.isCountDown = false;
  }

}
