import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { Typography, Box } from '@mui/material';
import { ConfirmationModal, ConfirmationModalActions } from './style';
import { PrimaryButtonStyled, SecondaryInverseButtonStyled } from '../../common/style';

interface ITakeQuizConfirmationModal {
  score: number | null;
  totalScore: number;
  quizId: string | undefined;
  setScore: React.Dispatch<React.SetStateAction<number | null>>;
}

export const TakeQuizConfirmationModal: React.FC<ITakeQuizConfirmationModal> = ({
  score,
  totalScore,
  quizId,
  setScore,
}) => {
  const isOpen = typeof score === 'number';

  const closeModal = () => {
    setScore(null);
  };

  return (
    <ConfirmationModal
      // sx={style}
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
          Compleated
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, mB: 2 }}>
          Your score: {score} from {totalScore}!
        </Typography>

        <ConfirmationModalActions>
          {/* @ts-ignore */}
          <SecondaryInverseButtonStyled component={Link} to={`/quiz/${quizId}`} onClick={closeModal} sx={{ mr: 10 }}>
            Try once again?
          </SecondaryInverseButtonStyled>
          {/* @ts-ignore */}
          <PrimaryButtonStyled component={Link} to={ROUTES.Home}>
            Go to home page
          </PrimaryButtonStyled>
        </ConfirmationModalActions>
      </Box>
    </ConfirmationModal>
  );
};
