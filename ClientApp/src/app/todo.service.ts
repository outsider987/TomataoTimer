import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
   todoitem = [
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
    return this.todoitem;
  }
}
