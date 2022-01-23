export interface UserHabit {
  title: string;
  length: number;
  reason: string[];
  longest: number;
  user: string;
  resources: {
    title: string;
    resourceLink: string;
  }[];
}
