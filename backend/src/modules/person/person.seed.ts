import { Person } from './person.model';

export const persons: InsertParams<Person>[] = [
  {
    nickname: 'ProTennisPlayer',
    fullname: 'John Doe',
  },
  {
    nickname: 'MentalCoach',
    fullname: 'Jane Coach',
  },
];
