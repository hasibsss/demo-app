import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-view',
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  taskss: any[] = [];
  totalTasks: number = 0;
  completedTasks: number = 0;
  completionPercentage: number = 0;
  taskStatusCount = {
    completed: 0,
    total: 0,
    upcoming: 0,
    overdue: 0,
  };

  constructor(private tasks: TaskService) {}

  ngOnInit(): void {
    this.taskss = this.tasks.gettasks();
    this.totalTasks = this.tasks.getTotaltasks();
    this.completedTasks = this.tasks.getCompletedtask();
    this.completionPercentage = (this.completedTasks / this.totalTasks) * 100;
  }

  loadTaskData(): void {
    this.taskss = this.tasks.gettasks();
    this.taskStatusCount = this.tasks.getTaskStatusCount();
  }

  getTaskColor(status: string): string {
    switch (status) {
      case 'completed':
        return 'bg-green-100';
      case 'upcoming':
        return 'bg-yellow-100';
      case 'overdue':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  }

  // Helper methods to determine task status
  isCompleted(task: any): boolean {
    return task.completed;
  }

  isUpcoming(task: any): boolean {
    return !task.completed && new Date(task.dueDate) > new Date();
  }

  isOverdue(task: any): boolean {
    return !task.completed && new Date(task.dueDate) < new Date();
  }
}
