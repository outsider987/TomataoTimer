import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition,  } from '@angular/animations';
import { CountdownService } from '../countdown.service';
import { TodoService } from '../todo.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ right: '-100%' }),
        animate('.5s', style({ right: 0 })),
      ]),
      transition(':leave', [
        animate('.5s', style({ right: "-100%" }))
      ])
    ]),
    trigger('changeValue', [
      transition(':enter', [
        style({ transform: 'translateX(-30%)', opacity: 0 }),
        animate('.3s ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ position: 'absolute' }),
        animate('.5s ease-out', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class MainComponent implements OnInit {
  // Data
  todoItem = [];
  // 顯示設定頁
  showSettingComponent = false;
  settingType = '0';
  constructor(public countdownService:CountdownService,public todoService: TodoService)
  { this.todoItem = this.todoService.getTodoData();}

  ngOnInit() {
  }
  AddToDoItem(e) {
    if(e.value == '') return;
    let key = (new Date()).getTime();
    this.todoService.addTodoData(key, e.value);
    e.value = '';
  }

  getNowTodoItem(data) {
    return data.filter( item => {
      return item.doing == true;
    })
  }
  waitTodoItemFilter(data) {
    return data.filter( item => {
      return item.finished == false && item.doing == false;
    }).slice(0,3);
  }

  toggleSettingComponent(id) {
    this.showSettingComponent = !this.showSettingComponent;
    if(id) {
      this.settingType = id;
    }
  }

   // 完成待辦

  }

