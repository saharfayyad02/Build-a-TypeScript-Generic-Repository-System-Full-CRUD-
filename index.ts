import { UserRepository } from './repositories/UserRepository';
import { CourseRepository } from './repositories/CourseRepository';
import { BookingRepository } from './repositories/BookingRepository';

(async () => {
  const userRepo = new UserRepository();
  const courseRepo = new CourseRepository();
  const bookingRepo = new BookingRepository();

  console.log('🔍 All Users:', await userRepo.getAll());
  console.log('🔍 Find User by ID:', await userRepo.getById(1));
  console.log('➕ Create User:', await userRepo.create({ id: 3, name: 'Lina', email: 'lina@example.com' }));
  console.log('✏️ Update User:', await userRepo.update(2, { name: 'Yakoob H' }));
  console.log('🗑️ Delete User:', await userRepo.delete(1));
  console.log('🔎 Find Users by Filter:', await userRepo.find({ name: 'Lina' }));
  console.log('\n📘 All Courses:', await courseRepo.getAll());
  console.log('\n📅 All Bookings:', await bookingRepo.getAll());
})();
