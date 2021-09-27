import { Injectable } from '@angular/core';
import { Task } from "../Task";
import { TASKS } from "../mock-tasks"
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // service function
  getTasks() :Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }
}
