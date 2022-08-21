import { calculateScore, generateUniqueID } from './helper';
import { Quiz, Question, questions_map, quizzes, QuestionToAnswer, ChoiceToAnswer } from './model';

// quiz
export function getAllQuizzes(): Quiz[] {
  return quizzes.values();
}

export function getQuizById(id: u32): Quiz {
  return quizzes.getSome(id);
}

export function createQuiz(name: string, questions: Question[]): Quiz {
  const questionsId = generateUniqueID();

  // save quiz
  const newQuiz = new Quiz(name, questionsId, questions.length);
  quizzes.set(newQuiz.id, newQuiz);

  // save questions
  const questionsToSave = questions.map<Question>(
    (question: Question) => new Question(question.order, question.title, question.choices)
  );
  questions_map.set(questionsId, questionsToSave);

  return newQuiz;
}

// questions
export function getQuizQuestions(id: u32): QuestionToAnswer[] {
  const questionsToAnswer = questions_map.getSome(id).map<QuestionToAnswer>((question) => ({
    title: question.title,
    order: question.order,
    choices: question.choices.map<ChoiceToAnswer>((choice) => ({ title: choice.title, order: choice.order })),
  }));

  return questionsToAnswer;
}

// score
export function getScore(questionsId: u32, answeredQuestions: Question[]): number {
  return calculateScore(questionsId, answeredQuestions);
}
