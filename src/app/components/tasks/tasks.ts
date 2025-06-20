import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task';
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tarefas = data;
    });
  }

}
