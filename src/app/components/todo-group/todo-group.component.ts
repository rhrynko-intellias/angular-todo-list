import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-group.component.html',
  styleUrl: './todo-group.component.css',
})
export class TodoGroupComponent {}
