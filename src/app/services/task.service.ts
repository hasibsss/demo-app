import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 public tasks=[
    { 
      id: 1, 
      title: 'Launch Social Media Campaign', 
      completed: false, 
      dueDate: '2024-12-10', 
      priority: 'High', 
      description: 'Develop and execute a social media campaign for brand awareness.' 
    },
    { 
      id: 2, 
      title: 'Create Marketing Strategy', 
      completed: true, 
      dueDate: '2024-12-12', 
      priority: 'High', 
      description: 'Develop a comprehensive marketing plan for the upcoming quarter.' 
    },
    { 
      id: 3, 
      title: 'Design Brand Identity', 
      completed: false, 
      dueDate: '2024-12-14', 
      priority: 'Medium', 
      description: 'Create a visual brand identity including logo, colors, and typography.' 
    },
    { 
      id: 4, 
      title: 'Market Research for New Product', 
      completed: true, 
      dueDate: '2024-12-18', 
      priority: 'High', 
      description: 'Conduct market research to understand customer needs and competitor offerings for a new product.' 
    },
    { 
      id: 5, 
      title: 'Create Email Newsletter', 
      completed: false, 
      dueDate: '2024-12-20', 
      priority: 'Medium', 
      description: 'Design and send a newsletter to customers with company updates and promotions.' 
    },
    { 
      id: 6, 
      title: 'Optimize Google Ads Campaign', 
      completed: true, 
      dueDate: '2024-12-22', 
      priority: 'High', 
      description: 'Review and optimize Google Ads campaigns to increase conversion rates.' 
    },
    { 
      id: 7, 
      title: 'Launch Influencer Marketing Campaign', 
      completed: false, 
      dueDate: '2024-12-25', 
      priority: 'Low', 
      description: 'Identify key influencers in the industry and launch a collaborative campaign.' 
    },
    { 
      id: 8, 
      title: 'Set Up Affiliate Marketing Program', 
      completed: false, 
      dueDate: '2024-12-30', 
      priority: 'Low', 
      description: 'Create an affiliate program to encourage third-party marketers to promote the business.' 
    },
    { 
      id: 9, 
      title: 'Content Marketing for Brand Awareness', 
      completed: false, 
      dueDate: '2024-12-28', 
      priority: 'Medium', 
      description: 'Write and publish high-quality content to increase organic traffic and brand awareness.' 
    },
    { 
      id: 10, 
      title: 'Host a Webinar for Lead Generation', 
      completed: false, 
      dueDate: '2024-12-30', 
      priority: 'High', 
      description: 'Organize and host a webinar to generate leads and engage potential customers.' 
    },
  ];
 

  constructor() { }
  gettasks(){
    return this.tasks;
  }
  deleteTask(id:number){
    this.tasks=this.tasks.filter(task=>task.id !==id)
  }
  getCompletedtask(){
    return this.tasks.filter(task=>task.completed).length;
  }
  getTotaltasks(){
    return this.tasks.length;
  }
  getUpcomingTasks() {
    const today = new Date();
    return this.tasks.filter((task) => new Date(task.dueDate) > today && !task.completed);
  }

  getOverdueTasks() {
    const today = new Date();
    return this.tasks.filter((task) => new Date(task.dueDate) < today && !task.completed);
  }

  getTaskStatusCount() {
    return {
      completed: this.tasks.filter((task) => task.completed).length,
      total: this.tasks.length,
      upcoming: this.getUpcomingTasks().length,
      overdue: this.getOverdueTasks().length,
    };
}}
