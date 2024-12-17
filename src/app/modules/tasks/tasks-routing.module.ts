import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

const routes:Routes= [
  { path: '', component: TaskListComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Use forChild for child routing
  exports: [RouterModule]
})
export class TasksRoutingModule { }
