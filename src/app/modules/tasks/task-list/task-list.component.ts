import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-task-list',
  imports: [CommonModule, MatCheckboxModule,
    FormsModule, ],
  standalone:true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks:any[]=[];
  constructor(private taskservice:TaskService,
   
  ){

  }
  ngOnInit(): void {
   this.tasks=this.taskservice.gettasks();
   console.log(this.tasks);
  }
  

  toggleCompletion(task:any){
    task.completed=!task.completed
    


  }
  deleteTask(task: any): void {
    this.tasks = this.tasks.filter(t => t.id !== task.id);  
    this.taskservice.deleteTask(task.id);
  }

}
