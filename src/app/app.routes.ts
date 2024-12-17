import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {
        path:'dashboard',
        loadChildren:()=> import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
    },
    {
        path:'tasks',
        loadChildren:()=> import('./modules/tasks/tasks.module').then(m=>m.TasksModule)
    }
];
