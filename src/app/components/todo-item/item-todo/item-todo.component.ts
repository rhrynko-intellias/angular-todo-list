import { Component } from '@angular/core';
import { TodoItemBaseComponent } from '../todo-item.base.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css', '../todo-item.component.css'],
})
export class ItemTodoComponent extends TodoItemBaseComponent {}
