import { TaskImpl } from './TaskImpl';
import { TaskManager } from './TaskManager';
import { User } from './types';

const alice: User = { id: 1, name: 'Alice', email: 'alice@example.com' };
const bob: User = { id: 2, name: 'Bob', email: 'bob@example.com' };

const taskManager = new TaskManager<TaskImpl>();

taskManager.addTask(new TaskImpl(1, 'Learn TypeScript', 'todo', new Date('2025-05-01'), 'high', 'Study types and interfaces', alice));
taskManager.addTask(new TaskImpl(2, 'Write documentation', 'in-progress', new Date('2025-05-10'), 'medium', undefined, bob));
taskManager.addTask(new TaskImpl(3, 'Demo project', 'todo', new Date('2025-04-30'), 'high'));

taskManager.updateStatus(1, 'done');

console.log('\n📋 All Tasks:');
taskManager.printTasks();

console.log('\n⏰ Overdue Tasks:');
const overdue = taskManager.getOverdueTasks();
overdue.forEach(t => console.log(`${t.title} is overdue!`));
