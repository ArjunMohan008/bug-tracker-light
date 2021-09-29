import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from "../../services/ui.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:string = 'Bug tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor( private uiService:UiService, private router:Router) {
    this.subscription = uiService.onToggle().subscribe((value)=> this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  toggleAddTaskBtn(){
    this.uiService.toggleShowAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
