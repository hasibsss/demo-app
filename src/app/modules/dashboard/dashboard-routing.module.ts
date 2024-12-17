import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes= [
  { path: '', component: DashboardViewComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Use forChild for child routing
  exports: [RouterModule]

})
export class DashboardRoutingModule { }
