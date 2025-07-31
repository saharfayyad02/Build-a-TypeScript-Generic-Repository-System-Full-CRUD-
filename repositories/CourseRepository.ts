import { BaseRepository } from './BaseRepository';
import { Course } from '../models/Course';

const courses: Course[] = [
  { id: 1, title: 'TypeScript Basics', description: 'Learn TypeScript from scratch' },
  { id: 2, title: 'Node.js Advanced', description: 'Deep dive into Node.js' },
];

export class CourseRepository extends BaseRepository<Course> {
  constructor() {
    super(courses);
  }
}
