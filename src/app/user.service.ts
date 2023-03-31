import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/core/model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private apiUrl1 = 'https://jsonplaceholder.typicode.com/todos';
  private usersUrl = 'assets/users.json';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<any> {
    const url = `${this.apiUrl1}?userId=${id}`;
    return this.http.get<any>(url);
  }

  getUsers2(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.usersUrl);
  }

}
