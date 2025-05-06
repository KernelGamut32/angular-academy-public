import { Task, TaskStatus, User } from './types';

export class TaskManager<T extends Task> {
  private tasks: T[] = [];

  addTask(task: T): void {
    this.tasks.push(task);
  }

  assignUser(taskId: number, user: User): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.assignee = user;
    }
  }

  updateStatus(id: number, status: TaskStatus): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = status;
    }
  }

  getTasksByStatus(status: TaskStatus): T[] {
    return this.tasks.filter(t => t.status === status);
  }

  getOverdueTasks(): T[] {
    return this.tasks.filter(t => t.isOverdue());
  }

  printTasks(): void {
    this.tasks.forEach(task => {
      console.log(`[${task.status.toUpperCase()}] ${task.title} (Due: ${task.dueDate.toDateString()}, Priority: ${task.priority})`);
      if (task.assignee) {
        console.log(`  Assigned to: ${task.assignee.name}`);
      }
    });
  }

  getAllTasks(): T[] {
    return [...this.tasks];
  }
}
