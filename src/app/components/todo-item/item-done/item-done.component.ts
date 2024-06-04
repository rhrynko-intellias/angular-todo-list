import { Component } from '@angular/core';
import { TodoItemBaseComponent } from '../todo-item.base.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-done',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-done.component.html',
  styleUrls: ['./item-done.component.css', '../todo-item.component.css'],
})
export class ItemDoneComponent extends TodoItemBaseComponent {}
