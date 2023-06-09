import { Task } from './../../Tasks/Task';
import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  tasks :Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks);

  }
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(()=> (this.tasks = this.tasks.filter(t=>t.id ! === task.id)));
  }
  ToggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe();
  }
}
