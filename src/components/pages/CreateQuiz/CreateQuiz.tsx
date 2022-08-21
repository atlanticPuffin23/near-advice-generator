import React from 'react';
import { Formik } from 'formik';
import { PageTitle } from './style';
import { CreateQuizForm } from './CreateQuizForm';
import { prepareFormValues } from '../../common/helpers';
import { CREATE_QUIZ_INITIAL_VALUES } from './constants';
import { CreateQuizConfirmation } from './CreateQuizConfirmation';
import { ICreateQuizValues, IQuiz } from '../../../types/interfaces';

export const CreateQuiz: React.FC = () => {
  const [createdQuiz, setCreatedQuiz] = React.useState<IQuiz | null>(null);

  const createNewQuiz = (values: ICreateQuizValues) => {
    const preparedValues = prepareFormValues<ICreateQuizValues>(values);

    window.contract.createQuiz(preparedValues).then((res) => setCreatedQuiz(res));
  };

  return (
    <div>
      {createdQuiz ? (
        <CreateQuizConfirmation quiz={createdQuiz} />
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
