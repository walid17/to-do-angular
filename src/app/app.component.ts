import { Component } from '@angular/core';
import { TodoDataService } from 'src/app/todo-data.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();
 constructor (private todoDataService: TodoDataService){

 }
 toggleTodoComplete(todo) {
  this.todoDataService.toggleTodoComplete(todo);
}
addTodo() {
  this.todoDataService.addTodo(this.newTodo);
  this.newTodo = new Todo();
}

removeTodo(todo) {
  this.todoDataService.deleteTodoById(todo.id);
}

get todos() {
  return this.todoDataService.getAllTodos();
}
}
