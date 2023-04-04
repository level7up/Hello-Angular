import { Component } from '@angular/core';
import { Task } from 'src/app/Tasks/Task';
import { TASKS } from 'src/app/Tasks/mock-tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  tasks :Task[] = TASKS;
}
