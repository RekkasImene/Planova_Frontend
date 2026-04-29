import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task, TaskPriority, TaskStatus } from '../../models/task';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskData } from '../../services/data/task-data';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert-service';

@Component({
  selector: 'app-task-list',
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  // recherche
  search: string = '';

  filters: any = {
    title: '',
    project: '',
    status: '',
    priority: '',
  };

  // colonnes affichées
  displayedColumns = [
    'id',
    'title',
    'project',
    'status',
    'priority',
    'assignee',
    'createdAt',
    'actions',
  ];

  filterColumns = [
    'idFilter',
    'titleFilter',
    'projectFilter',
    'statusFilter',
    'priorityFilter',
    'assigneeFilter',
    'createdAtFilter',
    'actionsFilter',
  ];

  constructor(
    private route: ActivatedRoute,
    private taskSevice: TaskData,
    private alertService: AlertService,
  ) {}

  // data from backend
  getTasks() {
    this.taskSevice.getTasks().subscribe({
      next: (response) => this.handleSuccessfulReponse(response),
      error: (error) => this.alertService.error('Erreur Rest API ! ' + error.error.message),
    });
  }

  getTask(task : Task) {
    this.taskSevice.getTask(task.id).subscribe({
      next: (response) => this.handleSuccessfulReponse(response),
      error: (error) => this.alertService.error('Erreur Rest API ! ' + error.error.message),
    });
  }

  handleSuccessfulReponse(response: any) {
    console.log('get tasks %s', response);
  }

  // data
  dataSource = new MatTableDataSource<Task>([
    {
      id: 1,
      title: 'Créer login',
      description: 'Page login Angular',
      domain: 'Frontend',
      project: 'Planova',
      creator: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: TaskStatus.TODO,
      assignee: 'John',
      priority: TaskPriority.HIGH,
    },
    {
      id: 2,
      title: 'Créer table',
      description: 'Task list',
      domain: 'Frontend',
      project: 'Planova',
      creator: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: TaskStatus.IN_PROGRESS,
      assignee: 'Alice',
      priority: TaskPriority.MEDIUM,
    },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // filtre global
  applyFilter() {
    this.dataSource.filterPredicate = (data: Task, filter: string) => {
      const f = JSON.parse(filter);

      return (
        (!f.title || data.title.toLowerCase().includes(f.title)) &&
        (!f.project || data.project.toLowerCase().includes(f.project)) &&
        (!f.status || data.status === f.status) &&
        (!f.priority || data.priority === f.priority)
      );
    };

    this.dataSource.filter = JSON.stringify({
      title: this.filters.title.toLowerCase(),
      project: this.filters.project.toLowerCase(),
      status: this.filters.status,
      priority: this.filters.priority,
    });
  }

  //  actions
  editTask(task: Task) {
    console.log('Edit', task);
  }

  deleteTask(task: Task) {
    this.dataSource.data = this.dataSource.data.filter((t) => t.id !== task.id);
  }

  // helpers UI
  getStatusClass(status: TaskStatus) {
    switch (status) {
      case TaskStatus.TODO:
        return 'text-yellow-600';
      case TaskStatus.IN_PROGRESS:
        return 'text-blue-600';
      case TaskStatus.DONE:
        return 'text-green-600';
    }
  }

  getPriorityClass(priority: TaskPriority) {
    switch (priority) {
      case TaskPriority.HIGH:
        return 'text-red-600 font-bold';
      case TaskPriority.MEDIUM:
        return 'text-yellow-600';
      case TaskPriority.LOW:
        return 'text-green-600';
    }
  }
}
