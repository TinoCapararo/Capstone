import { Experience } from './experience.model';

export const experiences: InsertParams<Experience>[] = [
  {
    id: 1,
    personId: 1,
    context: 'Grand Slam finals pressure',
    emotions: ['Anxiety', 'Excitement'],
    dashboardData: '{"heartRate": 120, "focusLevel": 85}',
    insights: 'Maintained composure during critical points',
    suggestedAction: 'Daily meditation for 20 minutes',
  },
  {
    id: 2,
    personId: 2,
    context: 'Pre-tournament preparation',
    emotions: ['Confidence', 'Focus'],
    dashboardData: '{"readinessScore": 92}',
    insights: 'Mental readiness is at its peak',
    suggestedAction: 'Keep current routine as-is',
  },
];
