import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/core/model/Utilisateur';
import { CalculService } from '../calcul.service';
import { UserService } from '../user.service';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers : Utilisateur[] = []
  username: string = '';

  constructor(private calculService: CalculService, private usersService : UserService,  private todoService: TodoService) { }

  ngOnInit(): void {
    this.listUsers=[
      {id: 1, name: "Leanne Graham", username: "Bret", email:
      "Sincere@april.biz"},
      {id: 2, name: "Ervin Howell", username: "Bret", email:
      "Shanna@melissa.tv"},
      {id: 3, name: "Clementine Bauch", username: "Samantha", email:
      "Nathan@yesenia.net"}
      ];

      this.usersService.getUsers().subscribe((users: any[]) => {
        this.listUsers = users;
      });
  }

  checkUsername() {
    const count = this.calculService.getNumberOf(this.listUsers, 'username', this.username);
    alert(`Nombre d'utilisateurs avec le username ${this.username}: ${count}`);
  }

  viewTodos(userId: number) {
    this.usersService.getUserById(userId).subscribe((todos: any[]) => {
      console.log(todos);
    });
  }

}
