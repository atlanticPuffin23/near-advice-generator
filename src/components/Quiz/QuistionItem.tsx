import React from 'react';
import { IQuestion } from '../Home/Home';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { QuestionItemWrapper } from './style';

export const QuestionItem: React.FC<IQuestion> = ({ quiestion, choices }) => {
  return (
    <QuestionItemWrapper>
      <p>{quiestion}</p>

      <div>
        <RadioGroup>
          {choices.map(({ choice }) => (
            <FormControlLabel key={choice} value={choice} control={<Radio />} label={choice} />
          ))}
        </RadioGroup>
      </div>
    </QuestionItemWrapper>
  );
};
