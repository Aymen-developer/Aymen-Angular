import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<any[]>(this.apiUrl);
  }

}
