import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TodoGroup } from '../../domain/todo-group';
import { ItemDoneComponent } from '../todo-item/item-done/item-done.component';
import { ItemInProgressComponent } from '../todo-item/item-in-progress/item-in-progress.component';
import { ItemTodoComponent } from '../todo-item/item-todo/item-todo.component';

@Component({
  selector: 'app-todo-group',
  standalone: true,
  imports: [
    CommonModule,
    ItemDoneComponent,
    ItemInProgressComponent,
    ItemTodoComponent,
  ],
  templateUrl: './todo-group.component.html',
  styleUrl: './todo-group.component.css',
})
export class TodoGroupComponent {
  @Input() todoGroup!: TodoGroup;
  @Input() index!: number;
}
