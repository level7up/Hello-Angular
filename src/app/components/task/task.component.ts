import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Tasks/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']

})
export class TaskComponent {
  @Input() task: Task;
  @Output() DeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  Delete(task: Task){
    this.DeleteTask.emit(task);
  }
  ToggleReminder(task: Task){
    this.onToggleReminder.emit(task);
  }
}
