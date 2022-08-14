import { logging } from 'near-sdk-as';
import { calculateScore } from './helper';
import { Quiz, Question, questions_map, quizzes } from './model';

// quiz
export function getAllQuizzes(): Quiz[] {
  return quizzes.values();
}

export function getQuizById(id: u32): Quiz {
  return quizzes.getSome(id);
}

export function createQuiz(name: string, questions: Question[]): Quiz {
  const newQuiz = new Quiz(name, questions);
  quizzes.set(newQuiz.id, newQuiz);

  return newQuiz;
}

// questions
export function getQuizQuestions(id: u32): Question[] {
  return questions_map.getSome(id);
}

// score
export function getScore(questionsId: u32, answeredQuestions: Question[]): number {
  return calculateScore(questionsId, answeredQuestions);
}
