import React from 'react';
import { Question } from './Question';
import { Form, useFormikContext } from 'formik';
import { TextInput } from '../../common/TextInput';
import { SecondaryButtonStyled } from '../../common/style';
import { ICreateQuizValues } from '../../../types/interfaces';
import { CREATE_QUIZ_QUESTION_INITIAL_VALUES, MAX_QUESTIONS_SIZE } from './constants';
import { FormWrapper, FormActionsWrapper, QuizNameWrapper, CreateQuizButton } from './style';

export const CreateQuizForm = () => {
  const { values, setFieldValue } = useFormikContext<ICreateQuizValues>();
  const { questions } = values;

  const addNewQuestion = () => setFieldValue('questions', [...questions, ...CREATE_QUIZ_QUESTION_INITIAL_VALUES]);

  return (
    <Form>
      <FormWrapper>
        <QuizNameWrapper>
          <TextInput id="quiz-title" placeholder="Quiz Name" name="name" />
        </QuizNameWrapper>

        {questions.map((question, questionIndex) => (
          <Question key={`${question.title}-${question.order}`} {...{ question, questionIndex }} />
        ))}

        <FormActionsWrapper>
          {questions.length < MAX_QUESTIONS_SIZE && (
            <SecondaryButtonStyled type="button" onClick={addNewQuestion}>
              Add Question
            </SecondaryButtonStyled>
          )}
          <CreateQuizButton type="submit">Create Quiz</CreateQuizButton>
        </FormActionsWrapper>
      </FormWrapper>
    </Form>
  );
};
