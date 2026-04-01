import { CapstoneUser } from './user.model';

export const capstoneUsers: InsertParams<CapstoneUser>[] = [
  {
    username: 'pro_player',
    password: '$2b$10$x8/M7QDCEqCZ6Yxghize2OxKo8BLaubjqAittA.HB1.BW91CP6zca',
    nickname: 'ProTennisPlayer',
    fullname: 'John Doe',
  },
  {
    username: 'mental_coach',
    password: '$2b$10$x8/M7QDCEqCZ6Yxghize2OxKo8BLaubjqAittA.HB1.BW91CP6zca',
    nickname: 'MentalCoach',
    fullname: 'Jane Coach',
  },
];
