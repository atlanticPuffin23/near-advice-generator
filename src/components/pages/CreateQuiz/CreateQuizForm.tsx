import React from 'react';
import { Question } from './Question';
import { Form, useFormikContext } from 'formik';
import { ICreateQuizValues } from './CreateQuiz';
import { ButtonStyled } from '../../common/style';
import { TextInput } from '../../common/TextInput';
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
          <Question key={questionIndex} {...{ question, questionIndex, setFieldValue }} />
        ))}

        <FormActionsWrapper>
          {questions.length < MAX_QUESTIONS_SIZE && (
            <ButtonStyled type="button" onClick={addNewQuestion}>
              Add Question
            </ButtonStyled>
          )}
          <CreateQuizButton type="submit">Create Quiz</CreateQuizButton>
        </FormActionsWrapper>
      </FormWrapper>
    </Form>
  );
};
