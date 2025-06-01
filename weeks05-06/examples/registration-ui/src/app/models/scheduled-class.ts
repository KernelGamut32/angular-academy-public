import { Course } from './course';
import { Student } from './student';

export interface ScheduledClass {
  id?: number;
  sectionName: string;
  startDate: string;
  endDate: string;
  course: Course;
  students?: Student[];
}
