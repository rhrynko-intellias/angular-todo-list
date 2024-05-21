import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TodoGroupComponent } from './components/todo-group/todo-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list';
}
