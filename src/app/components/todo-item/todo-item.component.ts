import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItem } from '../../domain/todo-group';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;
}
