import { Injectable } from '@angular/core';
import { Task } from "../Task";
import { TASKS } from "../mock-tasks"

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // service function
  getTasks() :Task[]{
    return TASKS;
  }
}
