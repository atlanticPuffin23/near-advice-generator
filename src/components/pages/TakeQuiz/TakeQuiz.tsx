import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useParams } from 'react-router-dom';
import { QuestionItem } from './QuistionItem';
import { useLocation } from 'react-router-dom';
import { prepareTakeAQuizQuestions } from './helpers';
import { prepareFormValues } from '../../common/helpers';
import { TakeQuizConfirmationModal } from './TakeQuizConfirmationModal';
import { IQuestion, IQuiz, ITakeQuizValues } from '../../../types/interfaces';
import { PageTitle, QuizAuthor, TakeQuizWrapper, FinishButton } from './style';

interface LocationState {
  state: { quiz: IQuiz };
}

export const TakeQuiz: React.FC = () => {
  const { quizId } = useParams();
  const { state } = useLocation() as LocationState;

  const [score, setScore] = React.useState<number | null>(null);
  const [currentQuiz, setCurrentQuiz] = React.useState<IQuiz>();
  const [currentQuestions, setCurrentQuestions] = React.useState<IQuestion[]>();

  const getQuizAndQuestionInfo = async () => {
    const quiz = state?.quiz ? state.quiz : await window.contract.getQuizById({ id: Number(quizId) });
    const questions = await window.contract.getQuizQuestions({ id: quiz.questionsId });

    quiz && setCurrentQuiz(quiz);
    questions && setCurrentQuestions(questions);
  };

  const getScore = async (values: ITakeQuizValues) => {
    const score = await window.contract?.getScore({
      questionsId: currentQuiz?.questionsId!,
      answeredQuestions: prepareFormValues(values).questions,
    });

    setScore(score);
  };

  useEffect(() => {
    getQuizAndQuestionInfo();
  }, []);
  return (
    <TakeQuizWrapper>
      {currentQuiz && currentQuestions && (
        <>
          <PageTitle>{currentQuiz.name} Quiz</PageTitle>
          <QuizAuthor>by {currentQuiz.owner}</QuizAuthor>

          <Formik
            initialValues={{
              questions: prepareTakeAQuizQuestions(currentQuestions),
            }}
            onSubmit={getScore}
          >
            <Form>
              {currentQuestions?.map((question, index) => (
                <QuestionItem key={`${question.title}-${question.order}`} {...question} questionIndex={index} />
              ))}

              <FinishButton type="submit" variant="contained">
                Finish
              </FinishButton>
            </Form>
          </Formik>
          <TakeQuizConfirmationModal
            {...{
              score,
              totalScore: currentQuestions.length,
              quizId,
              setScore,
            }}
          />
        </>
      )}
    </TakeQuizWrapper>
  );
};
