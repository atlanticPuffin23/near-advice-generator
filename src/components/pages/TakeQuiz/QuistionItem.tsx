import React from 'react';
import { useFormikContext } from 'formik';
import { QuestionItemWrapper, QuestionTitle } from './style';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { ITakeQuizValues, IQuestion } from '../../../types/interfaces';

interface IQuestionItemProps extends IQuestion {
  questionIndex: number;
}

export const QuestionItem: React.FC<IQuestionItemProps> = ({ title, choices, questionIndex }) => {
  const { values, setFieldValue } = useFormikContext<ITakeQuizValues>();

  const saveNewChoice = (_: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const previousChoice = values?.questions[questionIndex].correctChoice;

    setFieldValue(`questions[${questionIndex}].choices[${value}].isCorrect`, true);
    setFieldValue(`questions[${questionIndex}].choices[${previousChoice}].isCorrect`, false);
    setFieldValue(`questions[${questionIndex}].correctChoice`, value);
  };

  return (
    <QuestionItemWrapper>
      <QuestionTitle>{title}</QuestionTitle>

      <div>
        <RadioGroup name={`questions[${questionIndex}].correctChoice`} onChange={saveNewChoice}>
          {choices.map(({ title, order }, index) => (
            <FormControlLabel key={`${title}-${order}`} value={index} control={<Radio />} label={title} />
          ))}
        </RadioGroup>
      </div>
    </QuestionItemWrapper>
  );
};
