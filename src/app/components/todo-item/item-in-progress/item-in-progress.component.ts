import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemBaseComponent } from '../todo-item.base.component';

@Component({
  selector: 'app-item-in-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-in-progress.component.html',
  styleUrls: ['./item-in-progress.component.css', '../todo-item.component.css'],
})
export class ItemInProgressComponent extends TodoItemBaseComponent {}
