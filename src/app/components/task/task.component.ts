import { Component, Input } from '@angular/core';
import { Task } from '../../Tasks/Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task: Task;
}
