
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { white, faintTextOpactiy } from '../utils';

const OverallPerfomanceText = () => {
  return (
    <Box
      p={5}
      sx={{
        background:
          'linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))',
        borderRadius: '50%',
        width: '100px',
      }}>
      <Typography variant="h2" sx={{fontWeight: '700', color: white}}>
        76
      </Typography>

      <Typography sx={{opacity: faintTextOpactiy}}>of 100</Typography>
    </Box>
  );
};

export default OverallPerfomanceText;
