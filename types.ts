
export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
}

export enum AppStep {
  LANDING,
  QUIZ,
  PROPOSAL,
  SUCCESS
}
