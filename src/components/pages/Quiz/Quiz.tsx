import React, { useEffect } from 'react';
import { IQuestion, IQuiz } from '../Home/Home';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { QuestionItem } from './QuistionItem';
import { PageTitle, QuizAuthor, QuizWrapper, FinishButton } from './style';
import { Form, Formik } from 'formik';

const answeredQuestions: IQuestion[] = [
  {
    title: 'QUIESTION: 4?',
    choices: [
      { title: '2', isCorrect: false },
      { title: '3', isCorrect: false },
      { title: '4', isCorrect: true },
      { title: '5', isCorrect: false },
    ],
  },
  {
    title: 'QUIESTION: 8?',
    choices: [
      { title: '4', isCorrect: false },
      { title: '6', isCorrect: false },
      { title: '8', isCorrect: true },
      { title: '12', isCorrect: false },
    ],
  },
  {
    title: 'QUIESTION: 6?',
    choices: [
      { title: '4', isCorrect: false },
      { title: '6', isCorrect: true },
      { title: '8', isCorrect: false },
      { title: '12', isCorrect: false },
    ],
  },
  {
    title: 'QUIESTION: 12?',
    choices: [
      { title: '4', isCorrect: false },
      { title: '6', isCorrect: false },
      { title: '8', isCorrect: true },
      { title: '12', isCorrect: false },
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
    const quizzById = await window.contract?.getQuizById({ id: Number(quizId) });

    quizzById && setCurrentQuiz(quizzById);
  };

  const getQuestions = async () => {
    console.log('state.questionsId', state?.questionsId);
    const questions = await window.contract?.getQuizQuestions({ id: Number(state.questionsId) });

    questions && setCurrentQuestions(questions);
  };

  const getScore = async () => {
    console.log(currentQuiz?.questionsId);

    const score =
      currentQuiz?.questionsId &&
      (await window.contract?.getScore({
        questionsId: currentQuiz?.questionsId,
        answeredQuestions,
      }));
    console.log('score', `${score} / ${currentQuestions?.length}`);
  };

  useEffect(() => {
    getQuiz();
    getQuestions();
  }, []);

  console.log('currentQuestions', currentQuestions);
  return (
    <QuizWrapper>
      {currentQuiz && (
        <>
          {console.log('currentQuiz', currentQuiz)}
          <PageTitle>{currentQuiz.name} Quiz</PageTitle>
          <QuizAuthor>by {currentQuiz.owner}</QuizAuthor>

          {/* <Formik
            initialValues={{
              questions: ['jared', 'ian'],
            }}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            <Form> */}
          {currentQuestions?.map((question, index) => (
            <QuestionItem key={`${question.title}-${index}`} {...question} />
          ))}

          <FinishButton onClick={getScore} variant="contained">
            Finish
          </FinishButton>
          {/* </Form>
          </Formik> */}
        </>
      )}
    </QuizWrapper>
  );
};
