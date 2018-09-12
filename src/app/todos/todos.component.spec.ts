import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoDataService } from 'src/app/todo-data.service';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import 'rxjs/add/observable/of';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        TodoDataService,
        {
          provide: ApiService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            data: Observable.of({
              todos: []
            })
          }
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
