import React from 'react';
import { QuestionItemWrapper } from './style';
import { IQuestion } from '../../../types/interfaces';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

export const QuestionItem: React.FC<IQuestion> = ({ title, choices }) => {
  return (
    <QuestionItemWrapper>
      <p>{title}</p>

      <div>
        <RadioGroup>
          {choices.map(({ title }, index) => (
            // TO DO generate key
            <FormControlLabel key={index} value={title} control={<Radio />} label={title} />
          ))}
        </RadioGroup>
      </div>
    </QuestionItemWrapper>
  );
};
