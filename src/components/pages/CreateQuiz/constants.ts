export const MAX_QUESTIONS_SIZE = 10;
export const DEFAULT_CHOICE = '0';

export const CREATE_QUIZ_QUESTION_INITIAL_VALUES = [
  {
    order: 0,
    correctChoice: DEFAULT_CHOICE,
    title: '',
    choices: [
      { order: 0, title: '', isCorrect: true },
      { order: 1, title: '', isCorrect: false },
      { order: 2, title: '', isCorrect: false },
      { order: 3, title: '', isCorrect: false },
    ],
  },
];

export const CREATE_QUIZ_INITIAL_VALUES = {
  name: '',
  questions: CREATE_QUIZ_QUESTION_INITIAL_VALUES,
};
