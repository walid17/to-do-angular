import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from 'src/app/todo';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  constructor() { }

  @Input() todo: Todo;
  
    @Output()
    remove: EventEmitter<Todo> = new EventEmitter();
  
    @Output()
    toggleComplete: EventEmitter<Todo> = new EventEmitter();
  
  ngOnInit() {
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
