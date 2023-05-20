
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { faintTextOpactiy } from '../utils';

const ComparisonText = () => {
  return (
    <Box>
      <Typography sx={{opacity: faintTextOpactiy}}>
        You scored higher than 65% of the people who have taken these tests
      </Typography>
    </Box>
  );
};

export default ComparisonText;
