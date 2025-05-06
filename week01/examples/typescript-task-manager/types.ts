export type TaskStatus = 'todo' | 'in-progress' | 'done';
export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate: Date;
  priority: Priority;
  assignee?: User;

  isOverdue(): boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
