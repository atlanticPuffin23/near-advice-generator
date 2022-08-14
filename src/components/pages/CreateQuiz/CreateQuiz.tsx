import React from 'react';
import { Formik } from 'formik';
import { PageTitle } from './style';
import { prepareFormValues } from './helpers';
import { CreateQuizForm } from './CreateQuizForm';
import { IQuestion } from '../../../types/interfaces';
import { CREATE_QUIZ_INITIAL_VALUES } from './constants';
import { ConfirmationMessage } from './ConfirmationMessage';

export interface ICreateQuizQuestion extends IQuestion {
  correctChoice: string;
}

export interface ICreateQuizValues {
  name: string;
  questions: ICreateQuizQuestion[];
}

export const CreateQuiz: React.FC = () => {
  const [createdQuiz, setCreatedQuiz] = React.useState(null);

  const createNewQuiz = (values: ICreateQuizValues) => {
    const preparedValues = prepareFormValues(values);

    window.contract.createQuiz(preparedValues).then((res) => setCreatedQuiz(res));
  };

  return (
    <div>
      {createdQuiz ? (
        <ConfirmationMessage quiz={createdQuiz} />
      ) : (
        <>
          <PageTitle>Create Quiz</PageTitle>

          <Formik initialValues={CREATE_QUIZ_INITIAL_VALUES} onSubmit={createNewQuiz}>
            <CreateQuizForm />
          </Formik>
        </>
      )}
    </div>
  );
};
