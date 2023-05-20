import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {faintTextOpactiy} from '../utils';

const ResultText = () => {
  return (
    <Box pb={4}>
      <Typography variant="h5" sx={{opacity: faintTextOpactiy}}>
        Your Result
      </Typography>
    </Box>
  );
};

export default ResultText;
