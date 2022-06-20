import React from 'react';
import { PageTitle } from './style';
import { useLocation } from 'react-router-dom';

export const Quiz: React.FC = () => {
  const location = useLocation();
  const { title, owner, quiestions, id } = location.state;

  return (
    <div>
      <PageTitle>{title} Quiz</PageTitle>
      <p>by {owner}</p>
    </div>
  );
};
