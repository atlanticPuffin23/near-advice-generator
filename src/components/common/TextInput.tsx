import React from 'react';
import { useField } from 'formik';
import { TextField, TextFieldProps } from '@mui/material';

type TextInputProps = {
  name: string;
} & TextFieldProps;

export const TextInput: React.FC<TextInputProps> = ({ name, ...other }) => {
  const [field, meta, helper] = useField({ name });
  const { touched, error } = meta;

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    helper.setTouched(true, false);
  };

  const onBlurField = (e: React.FocusEvent<HTMLInputElement>) => {
    field.onBlur(e);
    helper.setTouched(true, false);
  };

  return <TextField {...field} {...other} onChange={onChangeField} onBlur={onBlurField} error={touched && !!error} />;
};
