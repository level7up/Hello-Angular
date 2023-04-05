import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { Task } from 'src/app/Tasks/Task';
import { TASKS } from 'src/app/Tasks/mock-tasks';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable <Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
