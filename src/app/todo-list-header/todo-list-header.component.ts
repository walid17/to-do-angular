import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {
  newTodo: Todo = new Todo();
  
    @Output()
    add: EventEmitter<Todo> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }


}
