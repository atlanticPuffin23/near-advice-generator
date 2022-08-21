import { ITakeQuizValues } from '../../types/interfaces';

export const prepareFormValues = <T extends ITakeQuizValues>(values: T) => ({
  ...values,
  questions: values.questions.map(({ correctChoice, choices, order, ...rest }, index) => ({
    ...rest,
    order: order || index,
    choices: choices.map((choice, index) => ({ ...choice, order: choice.order || index })),
  })),
});
