import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todo';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
lastId: number = 0;
todos: Todo[] = [];
  constructor(private api: ApiService) { }

  /*
  // without bac-end 

  addTodo(todo :Todo): TodoDataService{
    if(!todo.id){
      todo.id= ++this.lastId;
    }
    this.todos.push(todo);
    return this; 
  }

deleteTodoById(id : number): TodoDataService{
  this.todos =this.todos.filter(todo => todo.id !== id);
  return this ;
}

updateTodoById(id: number, values: Object = {}): Todo {
  let todo = this.getTodoById(id);
  if (!todo) {
    return null;
  }
  Object.assign(todo, values);
  return todo;
}
getAllTodos(): Todo[]{
  return this.todos;
}
getTodoById(id : number): Todo{
  return this.todos.filter(todo => todo.id === id).pop();
}
toggleTodoComplete(todo: Todo){
  let updatedTodo  = this.updateTodoById(todo.id, {
    complete: !todo.complete
  });
  return updatedTodo ;
}
*/
 // Simulate POST /todos
 addTodo(todo: Todo): Observable<Todo> {
  return this.api.createTodo(todo);
}

// Simulate DELETE /todos/:id
deleteTodoById(todoId: number): Observable<Todo> {
  return this.api.deleteTodoById(todoId);
}

// Simulate PUT /todos/:id
updateTodo(todo: Todo): Observable<Todo> {
  return this.api.updateTodo(todo);
}

// Simulate GET /todos
getAllTodos(): Observable<Todo[]> {
  return this.api.getAllTodos();
}

// Simulate GET /todos/:id
getTodoById(todoId: number): Observable<Todo> {
  return this.api.getTodoById(todoId);
}

// Toggle complete
toggleTodoComplete(todo: Todo) {
  todo.complete = !todo.complete;
  return this.api.updateTodo(todo);
}

}
