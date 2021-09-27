import { Injectable } from '@angular/core';
import { Task } from "../Task";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }

  // service function
  getTasks() :Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
}
