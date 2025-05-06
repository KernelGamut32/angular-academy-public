import { Task, TaskStatus, Priority, User } from './types';

export class TaskImpl implements Task {
  constructor(
    public id: number,
    public title: string,
    public status: TaskStatus = 'todo',
    public dueDate: Date,
    public priority: Priority = 'medium',
    public description?: string,
    public assignee?: User
  ) {}

  isOverdue(): boolean {
    const now = new Date();
    return this.status !== 'done' && now > this.dueDate;
  }
}
