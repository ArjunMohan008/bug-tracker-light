import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TASKS } from "../../mock-tasks"
import { TaskService } from "../../services/task.service"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  // define taskService
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    // define props to use within the component
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  tasks: Task[] = [];
}
