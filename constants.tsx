
import { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is our favorite pastime?",
    options: [
      { id: 'a', text: "Binge watching shows" },
      { id: 'b', text: "Eating random snacks" },
      { id: 'c', text: "Sleeping" },
      { id: 'd', text: "More eating" }
    ],
    correctOptionId: 'a'
  },
  {
    id: 2,
    question: "What is our favorite spot to walk?",
    options: [
      { id: 'a', text: "Around the hostel" },
      { id: 'b', text: "Galleria" },
      { id: 'c', text: "Global Foyer" },
      { id: 'd', text: "One Horizon" }
    ],
    correctOptionId: 'b'
  },
  {
    id: 3,
    question: "What was our favorite meal in the first year?",
    options: [
      { id: 'a', text: "McDonald's" },
      { id: 'b', text: "Hostel food" },
      { id: 'c', text: "Bisi Bele Bath" },
      { id: 'd', text: "Rasam rice" }
    ],
    correctOptionId: 'c'
  },
  {
    id: 4,
    question: "What is our favorite karaoke song?",
    options: [
      { id: 'a', text: "Tere Liye" },
      { id: 'b', text: "Alag Aasman" },
      { id: 'c', text: "Top of the World" },
      { id: 'd', text: "All of Me" }
    ],
    correctOptionId: 'c'
  },
  {
    id: 5,
    question: "Where did we go for Valentine's last year?",
    options: [
      { id: 'a', text: "Bell Botum" },
      { id: 'b', text: "Piano Man" },
      { id: 'c', text: "Downtown" },
      { id: 'd', text: "Chili's" }
    ],
    correctOptionId: 'a'
  }
];

export const WRONG_ANSWERS_MESSAGES = [
  "TRAITOR!!!",
  "BETRAYER!!!",
  "FAKE FRIEND!!!"
];
