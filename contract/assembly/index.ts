import { Quiz, Question } from './model';

export function getAllQuizzes(): Quiz[] {
  const quizzes = Quiz.getAllQuizzes();
  const result = new Array<Quiz>();
  for (let i = 0; i < quizzes.length; i++) {
    result.push(quizzes[i]);
  }
  return result;
}

export function createQuiz(title: string, questions: Question[]): number {
  const arr = new Array<Question>(questions.length);

  for (let i = 0; i < questions.length; i++) {
    arr[i] = questions[i];
  }

  return Quiz.addNewQuiz(title, arr);
}
