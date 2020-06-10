import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { User } from './user.interface';

@Component({
  selector: 'app-list',
  template: `
  <div style="text-align:center">
    <h1>
      Lista de Usuários
    </h1>
  </div>
  <ul>
    <li *ngFor="let item of items">
      <h2>{{ item.username }}x {{ item.email }}
      <button (click)="delete(item.id)">x</button></h2>
    </li>
  </ul>

  <input #username type='text' placeholder='Username'>
  <input #email type='text' placeholder='Email'>
  <button (click)="add(username.value, email.value)">Add</button>
  <p>{{ error?.message }}</p>
  <p *ngIf="error">{{ error?.error | json }}</p>
  `
})
export class ListComponent implements OnInit {

  items: User[];
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers().subscribe(
      (items: User[]) => this.items = items,
      (error: any) => this.error = error
    );
  }

  add(username: string, email: string) {
    this.api.createUser(username, email).subscribe(
      (item: User) => this.items.push(item),
      (error: any) => this.error = error
    );
  }

  delete(id: number) {
    this.api.deleteUser(id).subscribe(
      (success: any) => this.items.splice(
        this.items.findIndex(item => item.id === id)
      ),
      (error: any) => this.error = error
    );
  }
}
