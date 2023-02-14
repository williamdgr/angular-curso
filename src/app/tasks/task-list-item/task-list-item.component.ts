import { Task } from './../shared/task';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  @Input()
  public task: Task | undefined;

  constructor() {}

  ngOnInit(): void {

  }

}
