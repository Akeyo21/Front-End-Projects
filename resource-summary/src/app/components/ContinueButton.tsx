import 'react';
import {buttonBackground, mainBackground, white} from '../utils';

import Button from '@mui/material/Button';

const ContinueButton = () => {
  return (
    <Button
      size="large"
      sx={{
        background: buttonBackground,
        color: white,
        width: '100%',
        borderRadius: '30px',
        '&:hover': {
          background: mainBackground,
        },
      }}>
      Continue
    </Button>
  );
};

export default ContinueButton;
