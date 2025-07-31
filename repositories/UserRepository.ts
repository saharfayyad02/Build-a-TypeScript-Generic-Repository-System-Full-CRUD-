import { BaseRepository } from './BaseRepository';
import { User } from '../models/User';

const users: User[] = [
  { id: 1, name: 'Sahar', email: 'sahar@example.com' },
  { id: 2, name: 'Ahmad', email: 'ahmad@example.com' },
];

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(users);
  }
}
