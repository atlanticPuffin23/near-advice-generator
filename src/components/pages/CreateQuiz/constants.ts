export const MAX_QUESTIONS_SIZE = 10;

export const CREATE_QUIZ_QUESTION_INITIAL_VALUES = [
  {
    correctChoice: '0',
    title: '',
    choices: [
      { title: '', isCorrect: false },
      { title: '', isCorrect: false },
      { title: '', isCorrect: false },
      { title: '', isCorrect: false },
    ],
  },
];

export const CREATE_QUIZ_INITIAL_VALUES = {
  name: '',
  questions: CREATE_QUIZ_QUESTION_INITIAL_VALUES,
};
