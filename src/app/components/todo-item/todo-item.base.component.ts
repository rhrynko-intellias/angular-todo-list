import { Directive, Input } from '@angular/core';

import { TodoItem } from '../../domain/todo-group';

Directive({
  standalone: true,
});

export class TodoItemBaseComponent {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;
}
