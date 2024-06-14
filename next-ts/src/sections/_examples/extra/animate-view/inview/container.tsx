import { m } from 'framer-motion';

import Paper from '@mui/material/Paper';

import { MotionContainer } from 'src/components/animate';

import getVariant from '../get-variant';

// ----------------------------------------------------------------------

const TEXT = 'Minimals';


type ContainerViewProps = {
  isText: boolean;
  isMulti: boolean;
  selectVariant: string;
};

export default function ContainerView({
  isText,
  isMulti,
  selectVariant,
  ...other
}: ContainerViewProps) {

  return (
    <Paper
      sx={{
        p: 3,
        minHeight: 480,
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.neutral',
      }}
      {...other}
    >
        <MotionContainer
          component={m.h1}
          sx={{ typography: 'h1', display: 'flex', overflow: 'hidden' }}
        >
          {TEXT.split('').map((letter, index) => (
            <m.span key={index} variants={getVariant(selectVariant)}>
              {letter}
            </m.span>
          ))}
        </MotionContainer>
    </Paper>
  );
}
