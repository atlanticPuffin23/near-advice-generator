import { Quiz } from './model';

export function getAllQuizzes(): Quiz[] {
  const quizzes = Quiz.getAllQuizzes();
  const result = new Array<Quiz>();
  for (let i = 0; i < quizzes.length; i++) {
    result.push(quizzes[i]);
  }

  return result;
}

export function createQuiz(title: string, questions: string[]): number {
  return Quiz.addNewQuiz(title, questions);
}
