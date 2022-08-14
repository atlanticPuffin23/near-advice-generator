import React, { useEffect } from 'react';
import { IQuestion, IQuiz } from '../Home/Home';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { QuestionItem } from './QuistionItem';
import { PageTitle, QuizAuthor, QuizWrapper, FinishButton } from './style';

const answeredQuestions: IQuestion[] = [
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
      { choice: '8', isCorrect: true },
      { choice: '12', isCorrect: false },
    ],
  },
];

export const Quiz: React.FC = () => {
  const { quizId } = useParams();
  const { state } = useLocation();
  const [currentQuiz, setCurrentQuiz] = React.useState<IQuiz>();
  const [currentQuestions, setCurrentQuestions] = React.useState<IQuestion[]>();

  console.log('quizzId', quizId);
  const getQuiz = async () => {
    const quizzById =
      // @ts-ignore
      await window.contract?.getQuizById({ id: Number(quizId) });

    quizzById && setCurrentQuiz(quizzById);
  };

  const getQuestions = async () => {
    console.log('state.questionsId', state?.questionsId);
    const questions =
      // @ts-ignore
      await window.contract?.getQuizQuestions({ id: String(state.questionsId) });

    questions && setCurrentQuestions(questions);
  };

  const getScore = async () => {
    // @ts-ignore
    const score = await window.contract?.getScore({
      id: Number(quizId),
      answeredQuestions: answeredQuestions,
    });
    console.log('score', `${score} / ${currentQuestions?.length}`);
  };

  useEffect(() => {
    getQuiz();
    getQuestions();
  }, []);

  return (
    <QuizWrapper>
      {currentQuiz && (
        <>
          {console.log('currentQuiz', currentQuiz)}
          <PageTitle>{currentQuiz.title} Quiz</PageTitle>
          <QuizAuthor>by {currentQuiz.owner}</QuizAuthor>

          <form>
            {currentQuestions?.map((question) => (
              <QuestionItem key={question.quiestion} {...question} />
            ))}

            <FinishButton onClick={getScore} variant="contained">
              Finish
            </FinishButton>
          </form>
        </>
      )}
    </QuizWrapper>
  );
};
