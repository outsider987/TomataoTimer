import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  weekDateText;
  weekDateTomato = [0,0,0,0,0,0,0];
  weekRangeText;
  weekTotal;
  todayTotal;
  thisWeek = 0;

  constructor() { }
  todoItem = [
    {
      id: (new Date()).getTime(),
      title: "the First thing to do today!",
      tomoto: 5,
      finished: false,
      doing: true,
      finishedDate: ''
    }
    ,    {
      id: (new Date()).getTime() + 1,
      title: "the second thing to do today!",
      tomoto: 0,
      finished: false,
      doing: false,
      finishedDate: ''
    },    {
      id: (new Date()).getTime() + 2,
      title: "the third thing to do today!",
      tomoto: 0,
      finished: false,
      doing: false,
      finishedDate: ''
    },   {
      id: (new Date()).getTime() + 3,
      title: "the forth thing to do today!",
      tomoto: 0,
      finished: false,
      doing: false,
      finishedDate: ''
    }
    ,   {
      id: (new Date()).getTime() + 4,
      title: "the first thing done!",
      tomoto: 7,
      finished: true,
      doing: false,
      finishedDate: new Date(new Date().getTime() - 87400000)
    },   {
      id: (new Date()).getTime() + 5,
      title: "the second thing done!",
      tomoto: 2,
      finished: true,
      doing: false,
      finishedDate: new Date(new Date().getTime() - 87400000 * 2)
    }
    ,   {
      id: (new Date()).getTime() + 6,
      title: "the third thing done!",
      tomoto: 11,
      finished: true,
      doing: false,
      finishedDate: new Date(new Date().getTime() - 87400000 * 6)
    }


   ]
   getTodoData() {
    return this.todoItem;
  }
  addTodoTomoto() {
    this.todoItem.map( (item) => {
      if(item.doing) {
        item.tomoto = item.tomoto + 1;
      }
    })

    this.getWeekBargraphData();
  }
  getWeekBargraphData() {
    this.weekDateText = [];
    let today = new Date();
    let todayWeek = today.getDay();
    let weekStartDate = new Date(today)
    weekStartDate.setDate(today.getDate() - todayWeek + (7 * this.thisWeek));
    weekStartDate.setHours(0);
    weekStartDate.setMinutes(0);
    weekStartDate.setSeconds(0);
    for(let i = 0; i <= 6; i++) {
      let newDate = new Date(weekStartDate)
      newDate.setDate(weekStartDate.getDate() + i);
      let todayMonth = ((newDate.getMonth() + 1) < 10? "0"+(newDate.getMonth() + 1):(newDate.getMonth() + 1));
      let todayDate = ((newDate.getDate()) < 10? "0"+(newDate.getDate()):(newDate.getDate()));


      this.weekDateText.push(todayMonth + '.' + todayDate);
    }

  }


  setfinishedTodo(id, status) {
    this.todoItem.map((item) => {
      if(item.id == id) {
        item.finished = status;
        item.doing = false;
      }
    });
    let item = this.todoItem.filter( item => {
      return item.doing == true;
    });
    if(item.length == 0){
      this.setNowTodoItem('');
    }

    this.getWeekBargraphData();
  }

  setNowTodoItem(id) {
    let item = this.todoItem.filter( item => {
      item.doing = false;
      if(id !== '') {
        return item.finished == false && item.id == id;
      }else{
        return item.finished == false;
      }
    })
    if(item.length > 0) {
      item[0].doing = true;
    }
  }

  addTodoData(key, title) {
    this.todoItem.push({
      id: key,
      title: title,
      tomoto: 0,
      finished: false,
      doing: false,
      finishedDate: ''
    });
    let item = this.todoItem.filter( item => {
      return item.doing == true;
    });
    if(item.length == 0){
      this.setNowTodoItem('');
    }
  }
}
