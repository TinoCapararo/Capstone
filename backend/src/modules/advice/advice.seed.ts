import { Advice } from './advice.model';

export const advices: InsertParams<Advice>[] = [
  {
    personId: 1,
    experienceId: 1,
    type: 'Mental',
    content: 'Focus on your breath when the score is tight.',
  },
  {
    personId: 1,
    experienceId: 2,
    type: 'Physical',
    content: 'Ensure 8 hours of sleep for optimal recovery.',
  },
  {
    personId: 2,
    experienceId: null,
    type: 'General',
    content: 'Maintain a positive mindset during the off-season.',
  },
];
