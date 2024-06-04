import { Component } from '@angular/core';
import { TodoItemBaseComponent } from '../todo-item.base.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-in-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-in-progress.component.html',
  styleUrls: ['./item-in-progress.component.css', '../todo-item.component.css'],
})
export class ItemInProgressComponent extends TodoItemBaseComponent {}
