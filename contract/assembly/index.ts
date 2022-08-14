import { logging } from 'near-sdk-as';
import { calculateScore } from './helper';
import { Quiz, Question, questions_map, quizzes } from './model';

export function getAllQuizzes(): Quiz[] {
  return quizzes.values();
}

export function getQuizById(id: u32): Quiz {
  return quizzes.getSome(`${id}`);
}

export function getScore(id: u32, answeredQuestions: Question[]): number {
  return calculateScore(id, answeredQuestions);
}

export function createQuiz(title: string, questions: Question[]): void {
  const newQuiz = new Quiz(title, questions);
  quizzes.set(`${newQuiz.id}`, newQuiz);
}

export function getQuizQuestions(id: string): Question[] {
  return questions_map.getSome(id);
}
