import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    {id: 1, description: 'Tarefa1', completed: true },
    {id: 2, description: 'Tarefa2', completed: false },
    {id: 3, description: 'Tarefa3', completed: false },
    {id: 4, description: 'Tarefa4', completed: true }
  ]

  constructor() { }

  getAll() {
    return this.tasks;
  }
}
