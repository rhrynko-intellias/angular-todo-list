import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemBaseComponent } from '../todo-item.base.component';

@Component({
  selector: 'app-item-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css', '../todo-item.component.css'],
})
export class ItemTodoComponent extends TodoItemBaseComponent {}
