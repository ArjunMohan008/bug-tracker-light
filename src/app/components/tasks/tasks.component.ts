import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from "../../services/task.service"
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // define taskService
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    // define props to use within the component
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleTask(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskRemainder(task).subscribe();
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
