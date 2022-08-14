import React from 'react';
import { PageTitle } from './style';
import { Button } from '@mui/material';

const mockedQuiz = [
  {
    quiestion: 'QUIESTION: 4?',
    choices: [
      { choice: '2', isCorrect: false },
      { choice: '3', isCorrect: false },
      { choice: '4', isCorrect: true },
      { choice: '5', isCorrect: false },
    ],
  },
  {
    quiestion: 'QUIESTION: 8?',
    choices: [
      { choice: '4', isCorrect: false },
      { choice: '6', isCorrect: false },
      { choice: '8', isCorrect: true },
      { choice: '12', isCorrect: false },
    ],
  },
  {
    quiestion: 'QUIESTION: 6?',
    choices: [
      { choice: '4', isCorrect: false },
      { choice: '6', isCorrect: true },
      { choice: '8', isCorrect: false },
      { choice: '12', isCorrect: false },
    ],
  },
  {
    quiestion: 'QUIESTION: 12?',
    choices: [
      { choice: '4', isCorrect: false },
      { choice: '6', isCorrect: false },
      { choice: '8', isCorrect: false },
      { choice: '12', isCorrect: true },
    ],
  },
];

export const CreateQuiz: React.FC = () => {
  const createNewQuiz = () =>
    // TO DO: Fix type
    // @ts-ignore
    window.contract.createQuiz({
      title: '15/08',
      questions: mockedQuiz,
    });

  return (
    <div>
      <PageTitle>Create Quiz</PageTitle>
      <Button onClick={createNewQuiz}>Create Quiz</Button>
    </div>
  );
};
