export interface Task {
  id: number;
  title: string;
  description: string;
  file?: string;
  domain: string;
  project: string;
  creator: string;
  createdAt: Date;
  updatedAt: Date;
  status: TaskStatus;
  assignee: string;
  priority: TaskPriority;
  comments?: string[];
  tags?: string[];
  dueDate?: Date;
}

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}
