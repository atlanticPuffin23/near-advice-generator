import { ICreateQuizQuestion } from '../../../types/interfaces';

export const prepareTakeAQuizQuestions = (questions: ICreateQuizQuestion[]) =>
  questions.map(({ choices, ...other }) => ({
    ...other,
    correctChoice: '0',
    choices: choices.map((choice) => ({ ...choice, isCorrect: false })),
  }));
