import { Component, OnInit } from '@angular/core';
import { todo } from 'src/core/model/todo';
import { CalculService } from '../calcul.service';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todolist : todo[] = [] 
  constructor(private calculService: CalculService , private todoService: TodoService) { }

  ngOnInit(): void {
    this.todolist=[
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed":
      false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed":
      false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab",
      "completed": true}];

      this.todoService.getTodos().subscribe((todos: any[]) => {
        this.todolist = todos;
      });
  }
 
  showBilan() {
    const nbCompleted = this.calculService.getNumberOf(this.todolist, 'completed', true);
    const nbTotal = this.todolist.length;
    const message = `Nombre de todo complétés : ${nbCompleted} / ${nbTotal}`;
    alert(message);
  }
}
