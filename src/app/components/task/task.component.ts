import { Component, Input } from '@angular/core';
import { Task } from '../../Tasks/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task: Task;
  faTimes = faTimes;
}
