import React from 'react';
import { useFormikContext } from 'formik';
import { QuestionWrapper } from './style';
import { ICreateQuizValues } from './CreateQuiz';
import { TextInput } from '../../common/TextInput';
import { IQuestion } from '../../../types/interfaces';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

interface IQuestionProps {
  question: IQuestion;
  questionIndex: number;
}

export const Question: React.FC<IQuestionProps> = ({ question, questionIndex }) => {
  const { values, setFieldValue } = useFormikContext<ICreateQuizValues>();
  const questionNumber = questionIndex + 1;

  const saveNewChoice = (_: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const previousChoice = values?.questions[questionIndex].correctChoice;

    setFieldValue(`questions[${questionIndex}].choices[${value}].isCorrect`, true);
    setFieldValue(`questions[${questionIndex}].choices[${previousChoice}].isCorrect`, false);
    setFieldValue(`questions[${questionIndex}].correctChoice`, value);
  };

  return (
    <QuestionWrapper>
      <TextInput
        id={`question-${questionIndex}-title`}
        name={`questions[${questionIndex}].title`}
        placeholder={`Question ${questionNumber}`}
      />

      <FormControl>
        <FormLabel id="radio-buttons-group-label">Choose the right answer</FormLabel>

        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          defaultValue="0"
          name={`questions[${questionIndex}].correctChoice`}
          onChange={saveNewChoice}
        >
          {question.choices.map((_, choiceIndex) => {
            const choiceNumber = choiceIndex + 1;

            return (
              <FormControlLabel
                key={choiceIndex}
                value={choiceIndex}
                control={<Radio />}
                label={
                  <TextInput
                    id={`choice-title-${choiceIndex}`}
                    name={`questions[${questionIndex}].choices[${choiceIndex}].title`}
                    placeholder={`Option ${choiceNumber}`}
                  />
                }
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </QuestionWrapper>
  );
};
