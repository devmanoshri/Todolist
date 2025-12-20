import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);

  todoItemData: Array<Todo> = [
    {
      userId: 1,
      completed: false,
      title: 'shopping',
      id: 0
    },
    {
      userId: 1,
      completed: false,
      title: 'car wash',
      id: 1
    }
  ];

  
}
