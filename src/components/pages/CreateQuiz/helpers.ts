import { ICreateQuizValues } from './CreateQuiz';

export const prepareFormValues = (values: ICreateQuizValues) => ({
  ...values,
  questions: values.questions.map(({ correctChoice, ...rest }) => rest),
});
