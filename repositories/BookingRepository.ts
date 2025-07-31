import { BaseRepository } from './BaseRepository';
import { Booking } from '../models/Booking';

const bookings: Booking[] = [
  { id: 1, userId: 1, courseId: 2, date: '2025-07-30' },
  { id: 2, userId: 2, courseId: 1, date: '2025-08-01' },
];

export class BookingRepository extends BaseRepository<Booking> {
  constructor() {
    super(bookings);
  }
}
